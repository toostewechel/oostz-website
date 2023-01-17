import Head from "next/head";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import Layout from "../components/Layout";
import TabGallery from "../components/TabGallery";
import { useLogPageVisit } from "../components/googleAnalytics";

export default function Projecten() {
  useLogPageVisit();
  return (
    <body className="bg-background ">
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
            <section className="mt-10 mb-10 lg:mt-20 lg:mb-24">
              <div className="flex flex-row">
                <div className="w-full lg:w-2/3">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Projecten
                  </h1>
                  <p
                    style={{ maxWidth: "592px" }}
                    className="text-base font-body text-gray-200 font-normal mb-10 antialiased"
                  >
                    Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                    realisatie van uw project van ontwerp tot oplevering. Wij
                    zijn sterk in het klantgericht meedenken en hebben veel
                    ervaring in de bouwsector.
                  </p>
                </div>
              </div>
              <div>
                <TabGallery />
              </div>
            </section>
            <FooterMenu />
          </Layout>
        </main>
      </div>
    </body>
  );
}
