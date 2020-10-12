const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

//create a new SES object
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

//recipient account, make sure account is verified in AWS console
const recipient = "info@oostz-ontwerp.nl";

//sender account, make sure account is verified in AWS console
const sender = "Oostz Ontwerp <info@oostz-ontwerp.nl>";

//the subject line for the email
const subject = "Nieuwe reactie op de website";

//the character encoding for the e-mail
const charset = "UTF-8";

//specify the parameters to pass to the API
function CreateParams({
  firstName,
  lastName,
  phone,
  preference,
  email,
  message,
}) {
  return {
    Source: sender,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Text: {
          Data: `Iemand heeft het contactformulier op de website ingevuld
Contactgegevens
Naam: ${firstName} " " ${lastName}
Telefoon: ${phone}
Voorkeur afspraak: ${preference}
E-mail: ${email}
Bericht
${message}
`,
          Charset: charset,
        },
        Html: {
          Data: `
        <html>
          <head></head>
            <body>
              <p>Iemand heeft het contactformulier op de website ingevuld</p> 
              <h3>Contactgegevens</h3>
                <ul>
                  <li>Naam: ${firstName} ${lastName} </li>
                  <li>Telefoon: ${phone}</li>
                  <li>Voorkeur afspraak: ${preference}</li>
                  <li>E-mail: ${email}</li>
                </ul>
              <h3>Bericht</h3>
              <ul>
                <li>${message}</li>
              </ul>
            </body>
        </html>`,
          Charset: charset,
        },
      },
    },
  };
}

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post(
    "/contact",
    [
      check("firstName")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Dit veld is verplicht"),
      check("lastName")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Dit veld is verplicht"),
      check("phone").trim().escape(),
      check("preference").trim().escape(),
      check("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Vul een valide e-mail adres in"),
      check("message")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Dit veld is verplicht"),
      check("tussenvoegsel").isEmpty(),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const params = CreateParams(req.body);
      const sendEmail = ses.sendEmail(params).promise();
      sendEmail
        .then(function emailSent() {
          res.status(200).send({ ok: true });
        })
        .catch(function emailFailed() {
          res.status(404).send({ ok: false });
        });
    }
  );
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
