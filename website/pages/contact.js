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
    <body className="bg-background h-screen">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Layout>
            <Header></Header>
            <section className="mt-10 mb-10 lg:mt-20 lg:mb-12">
              <div className="flex flex-row">
                <div className="w-full lg:w-2/3">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Neem contact op!
                  </h1>
                  <p
                    style={{ maxWidth: "592px" }}
                    className="text-base font-body text-gray-200 font-normal mb-10 antialiased"
                  >
                    Heeft u vragen of wilt u ons meer vertellen over uw plannen?
                    Neem contact met ons op en wij zullen snel bij u terugkomen.
                  </p>
                </div>
              </div>
            </section>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-8">
                <label
                  className="text-base font-heading text-white font-semibold antialiased mb-1"
                  htmlFor="email"
                >
                  E-mail adress
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
                  Vraag of opmerking
                </label>
                <textarea
                  className="text-base font-body text-gray-200 font-normal antialiased border-b-2 border-yellow-100 bg-transparent w-full p-1 outline-none focus:border-yellow-500"
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
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
                    : "Submitted"
                  : "Submitting..."}
              </button>
            </form>
            {status.info.error && (
              <div className="error text-white">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success text-white">{status.info.msg}</div>
            )}
          </Layout>
        </main>
      </div>
    </body>
  );
};
