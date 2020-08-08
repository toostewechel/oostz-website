import Head from "next/head";
import ProjectHeader from "../../../components/project/ProjectHeader";
import Layout from "../../../components/Layout";
import LandingImage from "../../../components/project/LandingImage";
import ProjectDetails from "../../../components/project/ProjectDetails";
import SquareImage from "../../../components/project/SquareImage";

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
            <section id="projectdetails" className="-mt-10 md:mt-4 lg:mt-12">
              <Layout>
                <ProjectDetails
                  projectType="Ontwerp"
                  year="2020"
                  title="Moderne woning"
                  location="Raalte"
                  description="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. In hac habitasse platea dictumst. Praesent congue erat at massa. Duis lobortis massa imperdiet quam. Aenean imperdiet."
                />
                <div className="flex flex-col md:flex-row mt-12 md:mt-24 justify-between">
                  <div className="mb-12">
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
    </html>
  );
}
