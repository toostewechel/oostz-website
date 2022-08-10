import Head from "next/head";
import ProjectHeader from "../../../components/project/ProjectHeader";
import Layout from "../../../components/Layout";
import LandingImage from "../../../components/project/LandingImage";
import ProjectDetails from "../../../components/project/ProjectDetails";
import ProjectImage from "../../../components/project/ProjectImage";
import ThumbnailImage from "../../../components/ThumbnailImage";
import Footer from "../../../components/Footer";
import { useLogPageVisit } from "../../../components/googleAnalytics";

export default function Page() {
  useLogPageVisit();
  return (
    <html style={{ scrollBehavior: "smooth" }}>
      <body className="bg-background ">
        <div className="mx-auto">
          <Head>
            <meta name="description" content="Oostz-ontwerp" />
            <meta property="og:title" content="Moderne woning te Wijhe" />
            <meta
              property="og:image"
              content="/images/projecten/featured/featured-image-oostz-ontwerp-3.jpg"
            />
            <meta
              property="og:description"
              content="In Wijhe hebben we deze moderne woning mogen ontwerpen. Het stucwerk in combinatie met een vlakke dakpan zorgt voor een moderne en strakke uitstraling."
            />
            <title>Oostz Ontwerp</title>
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <main>
            <ProjectHeader />
            <section>
              <LandingImage
                backgroundImage="/images/ontwerpen/oostz-ontwerp3/landing-image-oostz-ontwerp3.jpg"
                category="Woningbouw"
                title="Moderne woning"
                projectType="Ontwerp"
              />
            </section>
            <section
              id="projectdetails"
              className="-mt-10 mb-16 md:mt-4 lg:mt-12 md:mb-32"
            >
              <Layout>
                <ProjectDetails
                  projectType="Ontwerp"
                  year="2020"
                  title="Strakke lijnen"
                  location="Wijhe"
                  description="In Wijhe hebben we deze moderne woning mogen ontwerpen. Het stucwerk in combinatie met een vlakke dakpan zorgt voor een moderne en strakke uitstraling."
                />
                <div className="flex mb-16 md:mb-32">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp3/oostz-ontwerp3-rectangle-1.jpg"
                    description="Voorzijde woning"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-32">
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp3/oostz-ontwerp3-square-1.jpg"
                      description="Woning voorzien van vide"
                    />
                  </div>
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp3/oostz-ontwerp3-square-2.jpg"
                      description="Zijgevel woning"
                    />
                  </div>
                </div>
                <div className="flex">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp3/oostz-ontwerp3-rectangle-2.jpg"
                    description="Achtergevel woning"
                  />
                </div>
              </Layout>
            </section>
            <section className="mb-16 md:mb-32">
              <Layout>
                <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                  Bekijk ook eens
                </h2>
                <div className="md:flex md:flex-row mt-8 ">
                  <div className="mr-0 mb-8 md:mr-4 md:mb-0 md:w-1/3">
                    <ThumbnailImage
                      src="/images/projecten/featured/featured-image-oostz-ontwerp1.jpg"
                      title="Ontwerp"
                      description="Twee-onder-een kap te Diepenveen"
                      href="/ontwerpen/oostz-ontwerp-1"
                    />
                  </div>
                  <div className="mr-0 md:mr-4 md:w-1/3">
                    <ThumbnailImage
                      src="/images/projecten/featured/featured-image-oostz-ontwerp4.jpg"
                      title="Ontwerp"
                      description="Schuurwoning te Hellendoorn"
                      href="/ontwerpen/oostz-ontwerp-4"
                    />
                  </div>
                  <div className=" md:w-1/3"></div>
                </div>
              </Layout>
            </section>
          </main>
          <Layout>
            <Footer />
          </Layout>
        </div>
      </body>
    </html>
  );
}
