import Head from "next/head";
import ProjectHeader from "../../../components/project/ProjectHeader";
import Layout from "../../../components/Layout";
import Landing from "../../../components/project/Landing";
import ProjectDetails from "../../../components/project/ProjectDetails";
import SquareImage from "../../../components/project/SquareImage";

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
            <Landing
              mobile="/images/projecten/mulder/mulder-1-xl.jpg"
              tablet="/images/projecten/mulder/mulder-1-xl.jpg"
              laptop="/images/projecten/mulder/mulder-1-xl.jpg"
              desktop="/images/projecten/mulder/mulder-1-xl.jpg"
            />
          </section>
          <section className="-mt-10">
            <Layout>
              <ProjectDetails
                projectType="Ontwerp"
                year="2020"
                title="Moderne woning"
                location="Raalte"
                description="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. In hac habitasse platea dictumst. Praesent congue erat at massa. Duis lobortis massa imperdiet quam. Aenean imperdiet."
              />
              <div className="flex flex-row mt-24 justify-between">
                <div>
                  <SquareImage
                    src="/images/projecten/mulder/mulder-square-1.png"
                    description="Fusce commodo aliquam arcu. Ut id nisl quis. "
                  />
                </div>
                <div>
                  <SquareImage
                    src="/images/projecten/mulder/mulder-square-2.png"
                    description="Fusce commodo aliquam arcu. Ut id nisl quis. "
                  />
                </div>
              </div>
            </Layout>
          </section>
        </main>
      </div>
    </body>
  );
}
