const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, phone, email, message } = req.body;

  const output = `
  <p>Iemand heeft het contactformulier op de website ingevuld</p> 
  <h3>Contactgegevens</h3>
  <ul>
    <li>Naam: ${name}</li>
    <li>Telefoon: ${phone}</li>
    <li>E-mail: ${email}</li>
  </ul>
  <h3>Bericht</h3>
  <ul>
    <li>${message}</li>
  </ul>
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
    res.status(200).send("Bericht succesvol verzonden");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Bericht niet verzonden. Probeer opnieuw.");
  }
}
