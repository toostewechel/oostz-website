import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardSlide from "../components/CardSlide";
import CardSmall from "../components/CardSmall";

export default function Home() {
  return (
    <body className="bg-background ">
      <div className="container mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header></Header>
          <Layout>
            <section className="mt-20">
              <CardSlide></CardSlide>
            </section>
            <section className="mt-20">
              <div
                style={{
                  maxWidth: "592px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="text-left md:text-center"
              >
                <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                  Van ontwerp tot oplevering
                </h2>
                <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                  {" "}
                  Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                  realisatie van uw project van ontwerp tot oplevering. Wij zijn
                  sterk in het klantgericht meedenken en hebben veel ervaring in
                  de bouwsector{" "}
                </p>
              </div>
              <div className="flex flex-row flex-wrap">
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-start">
                  <CardSmall
                    src="/concept-icon.svg"
                    title="Concept"
                    item1="Oriënterend gesprek"
                    item2="Vergunning check"
                    item3="Bestemmingsplan check"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                  <CardSmall
                    src="/ontwerp-icon.svg"
                    title="Ontwerp"
                    item1="Bouwkundig schetsontwerp"
                    item2="3D impressies"
                    item3="Kostenraming"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                  <CardSmall
                    src="/vergunning-icon.svg"
                    title="Vergunning"
                    item1="Bouwkundig tekenwerk"
                    item2="Toetsing bouwbesluit"
                    item3="Constructieberekening"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-end">
                  <CardSmall
                    src="/uitvoering-icon.svg"
                    title="Uitvoering"
                    item1="Technische omschrijvingen"
                    item2="Werktekeningen"
                    item3="Bouwbegeleiding"
                  ></CardSmall>
                </div>
              </div>
            </section>
          </Layout>
        </main>
      </div>
    </body>
  );
}
