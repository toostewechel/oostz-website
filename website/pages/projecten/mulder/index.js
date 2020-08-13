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
                mobileImage="/images/projecten/mulder/landing-mobile.jpg"
                desktopImage="/images/projecten/mulder/mulder-1-xl.jpg"
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
                  title="Moderne woning"
                  location="Raalte"
                  description="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. In hac habitasse platea dictumst. Praesent congue erat at massa. Duis lobortis massa imperdiet quam. Aenean imperdiet."
                />
                <div className="flex mb-16 md:mb-32">
                  <ProjectImage
                    src="/images/projecten/mulder/mulder-rectangle-1.png"
                    description="Fusce commodo aliquam arcu. Ut id nisl quis. "
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-32">
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/projecten/mulder/mulder-square-1.png"
                      description="Fusce commodo aliquam arcu. Ut id nisl quis. "
                    />
                  </div>
                  <div className="mb-12 md:mb-0">
                    <ProjectImage
                      src="/images/projecten/mulder/mulder-square-2.png"
                      description="Fusce commodo aliquam arcu. Ut id nisl quis. "
                    />
                  </div>
                </div>
                <div className="flex">
                  <ProjectImage
                    src="/images/projecten/mulder/mulder-rectangle-1.png"
                    description="Fusce commodo aliquam arcu. Ut id nisl quis. "
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
                  <div className="mr-0 md:mr-4 md:w-1/3">
                    <ThumbnailImage
                      src="/images/placeholders/placeholder-project-large.svg"
                      description="Lorum ipsum dolem"
                      href="/projecten/mulder"
                    />
                  </div>
                  <div className="mr-0 md:mr-4 md:w-1/3">
                    <ThumbnailImage
                      src="/images/placeholders/placeholder-project-large.svg"
                      description="Lorum ipsum dolem"
                      href="/projecten/mulder"
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
