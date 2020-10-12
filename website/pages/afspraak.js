import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";
import { useLogPageVisit } from "../components/googleAnalytics";

function ContactForm() {
  useLogPageVisit();
  return (
    <body className="bg-background">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz-ontwerp" />
          <meta property="og:title" content="Oostz-ontwerp" />
          <meta property="og:image" content="/images/home/featured-home.jpg" />
          <meta
            property="og:description"
            content="Oostz Ontwerp is een vakkundige en betrouwbare partner voor
            realisatie van uw project van ontwerp tot oplevering. Wij
            zijn sterk in het klantgericht meedenken en hebben veel
            ervaring in de bouwsector."
          />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Header></Header>
        <main className="mt-20">
          <Layout>
            <section className="mt-10 mb-10 md:mt-20 md:mb-24">
              <div className="flex flex-col md:flex-row">
                <div className="w-full mb-12 md:w-1/2 md:mb-0 md:mr-8">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Laten we samenwerken!
                  </h1>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    We horen graag van u! Stuur ons een bericht via dit
                    formulier of neem rechtstreeks contact met ons op via e-mail
                    of telefoon.
                  </p>
                  <div className="w-full">
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        preference: "",
                        message: "",
                        tussenvoegsel: "",
                      }}
                      validationSchema={Yup.object().shape({
                        firstName: Yup.string()
                          .min(2, "Je naam is te kort")
                          .required("Vul je voornaam in"),
                        lastName: Yup.string()
                          .min(2, "Je naam is te kort")
                          .required("Vul je achternaam in"),
                        email: Yup.string()
                          .email("Dit is geen correct e-mail adres")
                          .required("Vul je e-mail adres in"),
                        message: Yup.string()
                          .min(2, "Dit bericht is te kort")
                          .required("Vul je bericht in"),
                      })}
                      onSubmit={async (
                        values,
                        { setSubmitting, setStatus, resetForm }
                      ) => {
                        const res = await fetch("/contact", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(values),
                        });
                        if (res.status >= 400) {
                          setStatus("Invalid");
                        } else {
                          setStatus("Valid");
                          resetForm({
                            firstName: "",
                            lastName: "",
                            phone: "",
                            email: "",
                            preference: "",
                            message: "",
                          });
                        }
                        setSubmitting(false);
                      }}
                    >
                      {({ status, isSubmitting, submitForm }) => (
                        <Form>
                          <div className="flex flex-wrap md:mb-6">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-2">
                              <label
                                className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                                htmlFor="firstName"
                              >
                                Voornaam
                              </label>
                              <Field
                                className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-yellow-500"
                                id="firstName"
                                name="firstName"
                                required
                              ></Field>
                              <div className="text-red-500 text-sm italic">
                                <ErrorMessage name="firstName"></ErrorMessage>
                              </div>
                            </div>
                            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                              <label
                                className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                                htmlFor="lastName"
                              >
                                Achternaam
                              </label>
                              <Field
                                className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                                id="lastName"
                                name="lastName"
                                required
                              ></Field>
                              <div className="text-red-500 text-sm italic">
                                <ErrorMessage name="lastName"></ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap mb-6 w-full">
                            <div className="w-full">
                              <label
                                className="flex flex-row justify-between items-center mb-2"
                                htmlFor="phone"
                              >
                                <p className="tracking-wide text-gray-200 text-sm font-bold">
                                  Telefoon
                                </p>
                                <p className="tracking-wide text-gray-200 text-xs font-light italic">
                                  Optioneel
                                </p>
                              </label>
                              <Field
                                className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-yellow-500"
                                id="phone"
                                name="phone"
                              ></Field>
                            </div>
                          </div>
                          <div className="flex flex-wrap mb-6 w-full">
                            <div className="w-full">
                              <label
                                className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                                htmlFor="email"
                              >
                                E-mail adress
                              </label>
                              <Field
                                className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-yellow-500"
                                name="email"
                                type="email"
                                required
                              ></Field>
                              <div className="text-red-500 text-sm italic">
                                <ErrorMessage name="email"></ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap mb-6 w-full">
                            <div className="w-full">
                              <label
                                className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                                htmlFor="preference"
                              >
                                Voorkeur type afspraak
                              </label>
                              <Field
                                as="select"
                                className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                                name="preference"
                              >
                                <option value="" disabled>
                                  Kies type
                                </option>
                                <option value="Belafspraak">Belafspraak</option>
                                <option value="Videobellen">Videobellen</option>
                                <option value="Fysieke afspraak">
                                  Fysieke afspraak
                                </option>
                              </Field>
                            </div>
                          </div>
                          <div className="w-full mb-8">
                            <label
                              className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                              htmlFor="message"
                            >
                              Wat wilt u met ons bespreken?
                            </label>
                            <Field
                              as="textarea"
                              className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                              id="message"
                              name="message"
                              required
                              rows="3"
                            ></Field>
                            <div className="text-red-500 text-sm italic">
                              <ErrorMessage name="message"></ErrorMessage>
                            </div>
                            <div className="hidden">
                              <label htmlFor="tussenvoegsel">
                                Tussenvoegsel
                              </label>
                              <Field name="tussenvoegsel"></Field>
                            </div>
                          </div>
                          <button
                            className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              if (!isSubmitting) {
                                submitForm();
                              }
                            }}
                          >
                            Verzenden
                          </button>
                          {status === "Invalid" ? (
                            <div className="text-gray-200">
                              Er is iets misgegaan met het versturen van het
                              formulier. Probeer opnieuw.
                            </div>
                          ) : null}
                          {status === "Valid" ? (
                            <div className="text-gray-200">
                              Het formulier is succesvol verzonden!
                            </div>
                          ) : null}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: "url(/images/home/contactcard.jpg)",
                  }}
                  className="flex flex-col md:w-1/2 items-end md:ml-8 bg-yellow-100 rounded bg-cover px-8 py-8 self-start"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex flex-row mb-6">
                      <div className="h-12 w-12 mr-3 rounded bg-yellow-300">
                        <img src="/images/home/jochem-avatar.png"></img>
                      </div>
                      <div className="ml-2">
                        <h3 className="text-lg font-heading text-background font-semibold antialiased">
                          0628092228
                        </h3>
                        <p className="text-sm font-body text-background font-light antialiased">
                          Bel met Jochem
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="h-12 w-12 mr-3 rounded bg-yellow-300">
                        <img src="/images/home/koen-avatar.png"></img>
                      </div>
                      <div className="ml-2">
                        <h3 className="text-lg font-heading text-background font-semibold antialiased">
                          0642023612
                        </h3>
                        <p className="text-sm font-body text-background font-light antialiased">
                          Bel met Koen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </main>
      </div>
    </body>
  );
}

export default ContactForm;
