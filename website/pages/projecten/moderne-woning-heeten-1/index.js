import Head from "next/head";
import ProjectHeader from "../../../components/project/ProjectHeader";
import Layout from "../../../components/Layout";
import LandingImage from "../../../components/project/LandingImage";
import ProjectDetails from "../../../components/project/ProjectDetails";
import ProjectImage from "../../../components/project/ProjectImage";
import ThumbnailImage from "../../../components/ThumbnailImage";
import Footer from "../../../components/Footer";

export default function Page() {
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
                backgroundImage="/images/projecten/schutte-jansen-holleboom/landing-image-schutte-jansen-holleboom.jpg"
                category="Woningbouw"
                title="Moderne woning"
                projectType="Gerealiseerd"
              />
            </section>
            <section
              id="projectdetails"
              className="-mt-10 mb-16 md:mt-4 lg:mt-12 md:mb-32"
            >
              <Layout>
                <ProjectDetails
                  projectType="Gerealiseerd"
                  year="2019"
                  title="Vrijstaande woning"
                  location="Heeten"
                  description="Op nieuwbouwplan de IJsselgouwe te Heeten is deze moderne woning gerealiseerd. Het witte stucwerk in combinatie met de zwarte details geven een moderne look aan de woning."
                />
                <div className="flex mb-16 md:mb-32">
                  <ProjectImage
                    src="/images/projecten/schutte-jansen-holleboom/schutte-jansen-holleboom-rectangle-2.jpg"
                    description="Luchtfoto woning."
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-32">
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/projecten/schutte-jansen-holleboom/schutte-jansen-holleboom-square-1.jpg"
                      description="Entree woning."
                    />
                  </div>
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/projecten/schutte-jansen-holleboom/schutte-jansen-holleboom-square-2.jpg"
                      description="Wit stucwerk met zwarte details."
                    />
                  </div>
                </div>
                <div className="flex">
                  <ProjectImage
                    src="/images/projecten/schutte-jansen-holleboom/schutte-jansen-holleboom-rectangle-1.jpg"
                    description="Achterzijde woning."
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
                      src="/images/projecten/featured/featured-image-bloemsma.jpg"
                      title="Gerealiseerd"
                      description="Vrijstaande woning te Deventer"
                      href="/projecten/vrijstaande-woning-deventer-1"
                    />
                  </div>
                  <div className="mr-0 md:mr-4 md:w-1/3">
                    <ThumbnailImage
                      src="/images/projecten/featured/featured-image-krosse.jpg"
                      title="Gerealiseerd"
                      description="Moderne woning te Raalte"
                      href="/projecten/moderne-woning-raalte-1"
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
