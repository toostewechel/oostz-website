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
            <meta
              property="og:title"
              content="Landelijke schuurwoning te Hellendoorn"
            />
            <meta
              property="og:image"
              content="/images/projecten/featured/featured-image-oostz-ontwerp-4.jpg"
            />
            <meta
              property="og:description"
              content="In Hellendoorn hebben we deze moderne landelijke schuurwoning mogen ontwerpen. De houten gebinten maakt de woning af en zorgt voor een landelijke sfeer."
            />
            <title>Oostz Ontwerp</title>
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <main>
            <ProjectHeader />
            <section>
              <LandingImage
                backgroundImage="/images/ontwerpen/oostz-ontwerp4/landing-image-oostz-ontwerp4.jpg"
                category="Woningbouw"
                title="Schuurwoning"
                projectType="Ontwerp"
              />
            </section>
            <section
              id="projectdetails"
              className="-mt-10 mb-16 md:mt-4 lg:mt-12 md:mb-32"
            >
              <Layout>
                <ProjectDetails
                  projectType="Gerealiseerd"
                  year="2020"
                  title="Landelijke schuurwoning"
                  location="Hellendoorn"
                  description="In Hellendoorn hebben we deze moderne landelijke schuurwoning mogen ontwerpen. De houten gebinten maakt de woning af en zorgt voor een landelijke sfeer."
                />
                <div className="flex mb-16 md:mb-32">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp4/oostz-ontwerp4-rectangle-1.jpg"
                    description="Voorzijde woning"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-32">
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp4/oostz-ontwerp4-square-1.jpg"
                      description="Entree woning"
                    />
                  </div>
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/ontwerpen/oostz-ontwerp4/oostz-ontwerp4-square-2.jpg"
                      description="Woning voorzien van verticale gevelbekleding"
                    />
                  </div>
                </div>
                <div className="flex">
                  <ProjectImage
                    src="/images/ontwerpen/oostz-ontwerp4/oostz-ontwerp4-rectangle-2.jpg"
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
                      src="/images/projecten/featured/featured-image-oostz-ontwerp5.jpg"
                      title="Ontwerp"
                      description="Woning met paardenstal te Mariënheem"
                      href="/ontwerpen/oostz-ontwerp-5"
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
