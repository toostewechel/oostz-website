import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useLogPageVisit } from "../components/googleAnalytics";

export default () => {
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
            <section className="mt-10 mb-10 md:mt-20 ">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 md:mb-0 md:mr-8">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Onze contacgegevens
                  </h1>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    Heeft u vragen of wilt u ons meer vertellen over uw plannen?
                    Neem contact met ons op en wij zullen snel bij u terugkomen.
                  </p>
                  <div className="mb-8">
                    <div className="flex flex-row items-center">
                      <div className="flex">
                        <img
                          src="/images/contact/e-mail.svg"
                          className="mr-3"
                        ></img>
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-base font-heading text-white font-semibold antialiased">
                          E-mail
                        </h4>
                        <p className="text-sm font-body text-gray-200 font-normal antialiased truncate">
                          <a href="info@oostz-ontwerp.nl">
                            info@oostz-ontwerp.nl
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex flex-row items-start">
                      <div className="flex">
                        <img
                          src="/images/contact/phone.svg"
                          className="mr-3"
                        ></img>
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-base font-heading text-white font-semibold antialiased">
                          Telefoon
                        </h4>
                        <p className="text-sm font-body text-gray-200 font-normal antialiased truncate">
                          <a href="tel:0642023612">0642023612 - Koen</a>{" "}
                          <br></br>
                          <a href="tel:0628092228">0628092228 - Jochem</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="flex flex-row items-center">
                      <div className="flex">
                        <img
                          src="/images/contact/location.svg"
                          className="mr-3"
                        ></img>
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-base font-heading text-white font-semibold antialiased">
                          Adresgegevens
                        </h4>
                        <p className="text-sm font-body text-gray-200 font-normal antialiased truncate">
                          Het Fiester 1, 8106 PP Mariënheem
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center">
                      <div className="flex">
                        <img
                          src="/images/contact/kvk-nummer.svg"
                          className="mr-3"
                        ></img>
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-base font-heading text-white font-semibold antialiased">
                          KVK Nummer
                        </h4>
                        <p className="text-sm font-body text-gray-200 font-normal antialiased truncate">
                          80610919
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:flex-col md:w-1/3 lg:w-1/3 bg-yellow-100 rounded p-6 self-start">
                  <h2 className="text-2xl font-heading text-heading font-extrabold mb-2 antialiased">
                    Ontwerp laten maken?
                  </h2>
                  <p className="text-base font-body text-body font-normal mb-6 antialiased">
                    Overtuigd dat wij de juiste partner zijn voor uw plannen en
                    projecten? Wij helpen je graag! Neem vrijblijvend contact
                    met ons op.
                  </p>
                  <div>
                    <Button
                      href="/afspraak"
                      label="Maak afspraak"
                      ariaLabel="Maak afspraak"
                      icon="true"
                    ></Button>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
          <section className="mt-10 mb-24 lg:mt-20 lg:mb-32">
            <div
              className="w-full bg-cover"
              style={{
                background: `url(/images/contact/map-oostz.jpg)`,
                backgroundPosition: "center",
                height: "440px",
              }}
            ></div>
          </section>
          <Layout>
            <Footer></Footer>
          </Layout>
        </main>
      </div>
    </body>
  );
};
