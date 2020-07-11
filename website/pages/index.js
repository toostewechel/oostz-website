import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <body className="bg-background h-screen">
      <div className="container mx-auto">
        <Head>
          <title>Oostz ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header></Header>
        </main>
      </div>
    </body>
  );
}
