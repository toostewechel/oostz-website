const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");

async function sendMail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { name, phone, email, message } = req.body;
  const output = `
    <p>Iemand heeft het contactformulier ingevuld</p> 
    <h3>Contactgegevens</h3>
    <ul>
      <li>Naam: ${name}</li>
      <li>Telefoon: ${phone}</li>
      <li>E-mail: ${email}</li>
    </ul>
    <h3>Bericht</h3>
    <li>Bericht: ${message}</li>
  `;

  const content = {
    to: "info@oostz-ontwerp.nl",
    from: "info@oostz-ontwerp.nl",
    subject: `Nieuw bericht - Oostz Ontwerp`,
    text: message,
    html: output,
  };
  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log(JSON.stringify(error, "\n", 2));
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.post("/api/send", (req, res) => {
      sendMail(req, res);
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
