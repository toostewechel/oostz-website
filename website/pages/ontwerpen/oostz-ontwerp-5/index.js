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
            <meta name="description" content="Oostz Ontwerp" />
            <title>Oostz Ontwerp</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <ProjectHeader />
            <section>
              <LandingImage
                backgroundImage="/images/ontwerpen/oostz-ontwerp5/landing-image-oostz-ontwerp5.jpg"
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
                  title="Luxe en comfort"
                  location="Mariënheem"
                  description="In Mariënheem hebben we het ontwerp mogen maken van deze moderne woning met paardenverblijf. De gekozen materialen zorgen voor een moderne uitstraling passend in de omgeving"
                />
                <div className="flex mb-16 md:mb-32">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp5/oostz-ontwerp5-rectangle-1.jpg"
                    description="Voorzijde woning"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-32">
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp5/oostz-ontwerp5-square-1.jpg"
                      description="Entree woning"
                    />
                  </div>
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp5/oostz-ontwerp5-square-2.jpg"
                      description="Woning voorzien van verticale gevelbekleding"
                    />
                  </div>
                </div>
                <div className="flex">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp5/oostz-ontwerp5-rectangle-2.jpg"
                    description="Achterzijde woning"
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
