import Head from "next/head";
import ProjectHeader from "../../../components/ProjectHeader";
import Layout from "../../../components/Layout";

export default function Page() {
  return (
    <body className="bg-background ">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ProjectHeader />
          <section>
            <div className="w-full">
              <img className="bg-contain" src="/mulder/mulder-1-xl.jpg"></img>
            </div>
          </section>
          <section>
            <Layout>
              <div className="flex flex-row justify-between">
                <div className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded">
                  Ontwerp
                </div>
                <div>
                  <div></div>
                </div>
              </div>
              <div
                style={{
                  maxWidth: "592px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="text-left md:text-center mt-8"
              >
                <h4 className="text-white">2020</h4>
                <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                  Moderne woning
                </h1>
                <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                  Fusce commodo aliquam arcu. Ut id nisl quis enim dignissim
                  sagittis. Fusce commodo aliquam arcu. Ut id nisl quis enim
                  dignissim sagittis.
                </p>
              </div>
            </Layout>
          </section>
        </main>
      </div>
    </body>
  );
}
