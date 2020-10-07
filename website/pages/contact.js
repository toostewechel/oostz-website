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
    name: "",
    surname: "",
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
        name: "",
        surname: "",
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
    const res = await fetch("/api/send", {
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
                    We horen graan van u! Stuur ons een bericht via dit
                    formulier of neem rechtstreeks contact met ons op via e-mail
                    of telefoon.
                  </p>
                  <div className="w-full">
                    <form onSubmit={handleOnSubmit} className="w-full">
                      <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-2">
                          <label
                            className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                            htmlFor="name"
                          >
                            Voornaam
                          </label>
                          <input
                            className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                            placeholder="Jan"
                            id="name"
                            type="name"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                          ></input>
                        </div>
                        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pl-2">
                          <label
                            className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                            htmlFor="surname"
                          >
                            Achternaam
                          </label>
                          <input
                            className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                            placeholder="Boom"
                            id="surname"
                            type="surname"
                            onChange={handleOnChange}
                            required
                            value={inputs.surname}
                          ></input>
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                          <label
                            className="flex flex-row justify-between items-center mb-2"
                            htmlFor="phone"
                          >
                            <p className="tracking-wide text-gray-200 text-sm font-bold">
                              Telefoon
                            </p>
                            <p className="tracking-wide text-gray-200 text-xs font-light">
                              Optioneel
                            </p>
                          </label>
                          <input
                            className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                            placeholder="0612345678"
                            id="phone"
                            type="phone"
                            onChange={handleOnChange}
                            value={inputs.phone}
                          ></input>
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                          <label
                            className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                            htmlFor="email"
                          >
                            E-mail adress
                          </label>
                          <input
                            className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                            placeholder="janboom@gmail.com"
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                          ></input>
                        </div>
                      </div>
                      <div className="w-full mb-8">
                        <label
                          className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                          htmlFor="preference"
                        >
                          Voorkeur type afspraak
                        </label>
                        <select
                          className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                          id="preference"
                          type="preference"
                          onChange={handleOnChange}
                          value={inputs.preference}
                        >
                          <option>Belafspraak</option>
                          <option>Videobellen</option>
                          <option>Fysieke afspraak</option>
                        </select>
                      </div>

                      <div className="w-full mb-8">
                        <label
                          className="block tracking-wide text-gray-200 text-sm font-bold mb-2"
                          htmlFor="message"
                        >
                          Wat wilt u met ons bespreken?
                        </label>
                        <textarea
                          className="appearance-none block w-full bg-transparent text-gray-200 border border-yellow-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-500"
                          id="message"
                          onChange={handleOnChange}
                          required
                          value={inputs.message}
                          rows="3"
                        ></textarea>
                      </div>

                      <button
                        className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300"
                        type="submit"
                        disabled={status.submitting}
                      >
                        {!status.submitting
                          ? !status.submitted
                            ? "Verzenden"
                            : "Bericht verzonden"
                          : "Bezig met verzenden..."}
                      </button>
                    </form>
                    {status.info.error && (
                      <div className="error text-gray-200">
                        Error: {status.info.msg}
                      </div>
                    )}
                    {!status.info.error && status.info.msg && (
                      <div className="success text-gray-200">
                        {status.info.msg}
                      </div>
                    )}
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
