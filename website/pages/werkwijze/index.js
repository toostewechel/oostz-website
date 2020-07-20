import Head from "next/head";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Collapsible from "../../components/Collapsible";
import Stack from "../../components/Stack";

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
            <div className="flex flex-row ">
              <div className="w-1/3 pr-4">
                <div className="flex flex-row align-center mb-4">
                  <img src="/concept-icon.svg" className="mr-2"></img>
                  <h3 className="text-xl font-heading text-white font-semibold antialiased ">
                    Concept
                  </h3>
                </div>
                <p className="text-sm font-body text-gray-200 font-normal mb-10 antialiased">
                  In deze fase maken we <strong>laagdrempelig</strong> kennnis,
                  onderzoeken we uw wensen en bepalen we samen de haalbaarheid
                  van uw plannen.
                </p>
              </div>
              <div className="w-2/3 pl-4">
                <Collapsible
                  title="Kennismaking"
                  subtitle="Leer ons kennen en vertel uw plannen"
                  src="/kennismaking.svg"
                  description="Vertel ons vrijblijvend uw verhaal en maak kennis met Oostz ontwerp.
                  Samen bespreken wij uw wensen en ideeën en wat u van ons kunt
                  verwachten. Het is handig als u al zoveel mogelijk informatie
                  meeneemt. Denk aan kaveldetails, stijlvoorkeuren en budget."
                ></Collapsible>
                <Stack size={12} />
                <Collapsible
                  title="Vergunning- en bestemmingsplan"
                  subtitle="Wij zoeken uit of er gebouwd mag worden"
                  src="/vergunning.svg"
                  description="Vertel ons vrijblijvend uw verhaal en maak kennis met Oostz ontwerp.
                  Samen bespreken wij uw wensen en ideeën en wat u van ons kunt
                  verwachten. Het is handig als u al zoveel mogelijk informatie
                  meeneemt. Denk aan kaveldetails, stijlvoorkeuren en budget."
                ></Collapsible>
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </body>
  );
}
