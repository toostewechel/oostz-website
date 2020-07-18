import Head from "next/head";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Accordion from "../../components/Accordion";

export default function Werkwijze() {
  return (
    <body className="bg-background h-screen ">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Layout>
            <Header></Header>;
            <section className="mt-20 mb-24">
              <div className="flex flex-row">
                <div className="w-2/3">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Onze werkwijze
                  </h1>
                  <p
                    style={{ maxWidth: "592px" }}
                    className="text-base font-body text-gray-200 font-normal mb-10 antialiased"
                  >
                    Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                    realisatie van uw project van ontwerp tot oplevering. Wij
                    zijn sterk in het klantgericht meedenken en hebben veel
                    ervaring in de bouwsector van ontwerp tot oplevering.
                  </p>
                </div>
                <div className="flex w-1/3 justify-end">
                  <img src="/werkwijze.svg"></img>
                </div>
              </div>
            </section>
            <div className="flex flex-row">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <Accordion></Accordion>
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </body>
  );
}
