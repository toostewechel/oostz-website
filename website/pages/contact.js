import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
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
        phone: "",
        email: "",
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
                    Neem contact op
                  </h1>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    Heeft u vragen of wilt u ons meer vertellen over uw plannen?
                    Neem contact met ons op en wij zullen snel bij u terugkomen.
                  </p>
                  <div className="w-full">
                    <form onSubmit={handleOnSubmit}>
                      <div className="mb-8">
                        <label
                          className="text-base font-heading text-white font-semibold antialiased mb-1"
                          htmlFor="name"
                        >
                          Naam <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          className="text-base font-body text-gray-200 font-normal antialiased border-b-2 border-yellow-100 bg-transparent w-full p-1 outline-none focus:border-yellow-500"
                          id="name"
                          type="name"
                          onChange={handleOnChange}
                          required
                          value={inputs.name}
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          className="text-base font-heading text-white font-semibold antialiased mb-1"
                          htmlFor="phone"
                        >
                          Telefoon
                        </label>
                        <input
                          className="text-base font-body text-gray-200 font-normal antialiased border-b-2 border-yellow-100 bg-transparent w-full p-1 outline-none focus:border-yellow-500"
                          id="phone"
                          type="phone"
                          onChange={handleOnChange}
                          value={inputs.phone}
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          className="text-base font-heading text-white font-semibold antialiased mb-1"
                          htmlFor="email"
                        >
                          E-mail adress{" "}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <input
                          className="text-base font-body text-gray-200 font-normal antialiased border-b-2 border-yellow-100 bg-transparent w-full p-1 outline-none focus:border-yellow-500"
                          id="email"
                          type="email"
                          onChange={handleOnChange}
                          required
                          value={inputs.email}
                        />
                      </div>
                      <div className="mb-12">
                        <label className="text-white block" htmlFor="message">
                          Vraag of opmerking{" "}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <textarea
                          className="text-base font-body text-gray-200 font-normal antialiased border-b-2 border-yellow-100 bg-transparent w-full p-1 outline-none focus:border-yellow-500"
                          id="message"
                          onChange={handleOnChange}
                          required
                          value={inputs.message}
                          rows="3"
                        />
                      </div>
                      <button
                        className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300"
                        type="submit"
                        disabled={status.submitting}
                      >
                        {!status.submitting
                          ? !status.submitted
                            ? "Verzenden"
                            : "Verzonden"
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
                      <div>
                        <svg
                          className="fill-current text-background"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 19.042c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zM8.75 4.792c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0 4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0 4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm9.5-6.334c.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583zm-4.75 6.334c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm4.75 0c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0-4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm-4.75 0c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0-4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583z" />
                        </svg>
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
                      <div>
                        <svg
                          className="fill-current text-background"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 19.042c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zM8.75 4.792c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0 4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0 4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm9.5-6.334c.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583zm-4.75 6.334c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm4.75 0c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0-4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm-4.75 0c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583zm0-4.75c-.87 0-1.583.712-1.583 1.583 0 .87.712 1.583 1.583 1.583.87 0 1.583-.712 1.583-1.583 0-.87-.712-1.583-1.583-1.583z" />
                        </svg>
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
