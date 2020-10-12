import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";
import { useLogPageVisit } from "../components/googleAnalytics";

export default () => {
  useLogPageVisit();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    preference: "",
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        preference: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

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
                    <form
                      onSubmit={handleOnSubmit}
                      className="w-full"
                      noValidate
                    ></form>
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
};
