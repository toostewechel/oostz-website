import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardSlide from "../components/CardSlide";

export default function Home() {
  return (
    <body className="bg-background h-screen">
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
          </Layout>
        </main>
      </div>
    </body>
  );
}
