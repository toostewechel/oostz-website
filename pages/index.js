import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardSmall from "../components/CardSmall";
import HoverCard from "../components/HoverCard";
import ThumbnailImage from "../components/ThumbnailImage";
import Designers from "../components/Designers";
import FooterMenu from "../components/FooterMenu";
import Button from "../components/Button";
import CardSliderDesktop from "../components/CardSliderDesktop";
import CardSliderMobile from "../components/CardSliderMobile";
import TestimonialSlider from "../components/TestimonialSlider";
import HorizontalScrollContainer from "../components/HorizontalScrollContainter";
import { useMediaQuery } from "beautiful-react-hooks";
import { useLogPageVisit } from "../components/googleAnalytics";

export default function Home() {
  useLogPageVisit();

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <html style={{ scrollBehavior: "smooth" }}>
      <body className="bg-background ">
        <div className="mx-auto">
          <Head>
            <meta name="description" content="Oostz-ontwerp" />
            <meta property="og:title" content="Oostz-ontwerp" />
            <meta
              property="og:image"
              content="/images/home/featured-home.jpg"
            />
            <meta
              property="og:description"
              content="Oostz Ontwerp is een vakkundige en betrouwbare partner voor
              realisatie van uw project van ontwerp tot oplevering."
            />
            <title>Oostz Ontwerp</title>
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <Header></Header>
          <main>
            {isMobile ? (
              <Layout>
                <div className="mt-32">
                  <CardSliderMobile />
                </div>
              </Layout>
            ) : (
              <CardSliderDesktop />
            )}
            <Layout id="section1">
              <section className="mb-16 md:mb-32 md:mt-32">
                <div
                  style={{
                    maxWidth: "592px",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                  className="text-left md:text-center"
                >
                  <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                    Van ontwerp tot oplevering
                  </h2>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                    realisatie van uw project van ontwerp tot oplevering. Wij
                    zijn sterk in het klantgericht meedenken en hebben veel
                    ervaring in de bouwsector.
                  </p>
                </div>
                <div className="flex flex-row flex-wrap md:mb-8">
                  <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-start">
                    <CardSmall
                      src="/concept-icon.svg"
                      title="Concept"
                      item1="Oriënterend gesprek"
                      item2="Vergunningcheck"
                      item3="Bestemmingsplan check"
                    ></CardSmall>
                  </div>
                  <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                    <CardSmall
                      src="/ontwerp-icon.svg"
                      title="Ontwerp"
                      item1="Bouwkundig schetsontwerp"
                      item2="3D impressies"
                      item3="Kostenraming"
                    ></CardSmall>
                  </div>
                  <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                    <CardSmall
                      src="/vergunning-icon.svg"
                      title="Vergunning"
                      item1="Bouwkundig tekenwerk"
                      item2="Toetsing bouwbesluit"
                      item3="Constructieberekening"
                    ></CardSmall>
                  </div>
                  <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-end">
                    <CardSmall
                      src="/uitvoering-icon.svg"
                      title="Uitvoering"
                      item1="Technische omschrijvingen"
                      item2="Werktekeningen"
                      item3="Bouwbegeleiding"
                    ></CardSmall>
                  </div>
                </div>
                <div className="flex md:justify-center">
                  <div className=" lg:mt-0">
                    <Button
                      label="Onze werkwijze"
                      href="/werkwijze"
                      ariaLabel="Onze werkwijze"
                      icon="true"
                    ></Button>
                  </div>
                </div>
              </section>
              <section className="mb-16 md:mb-32">
                <div
                  style={{
                    maxWidth: "592px",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                  className="text-left md:text-center"
                >
                  <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                    Projecten
                  </h2>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    Bekijk hier onze ontwerpen en gerealiseerde projecten.
                  </p>
                </div>
                {isMobile ? (
                  <div>
                    <HorizontalScrollContainer></HorizontalScrollContainer>
                    <div className="flex md:justify-center">
                      <div className="lg:mt-6">
                        <Button
                          label="Alle projecten"
                          href="/projecten"
                          ariaLabel="Alle projecten"
                          icon="true"
                        ></Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <div className="md:flex md:flex-row mt-8">
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-demir.jpg"
                            href="/projecten/notaris-woning-deventer-1"
                            title="Gerealiseerd"
                          />
                        </div>
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-bloemsma.jpg"
                            href="/projecten/vrijstaande-woning-deventer-1"
                            title="Gerealiseerd"
                          />
                        </div>
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-krosse.jpg"
                            href="/projecten/moderne-woning-raalte-1"
                            title="Gerealiseerd"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:flex-row md:-mt-2">
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-oostz-ontwerp4.jpg"
                            href="/ontwerpen/oostz-ontwerp-4"
                            title="Ontwerp"
                          />
                        </div>
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-oostz-ontwerp1.jpg"
                            href="/ontwerpen/oostz-ontwerp-1"
                            title="Ontwerp"
                          />
                        </div>
                        <div className="p-2 md:w-1/3">
                          <ThumbnailImage
                            src="/images/projecten/featured/featured-image-oostz-ontwerp5.jpg"
                            href="/ontwerpen/oostz-ontwerp-5"
                            title="Ontwerp"
                          />
                        </div>
                      </div>
                      <div className="flex md:justify-center">
                        <div className="lg:mt-6">
                          <Button
                            label="Alle projecten"
                            href="/projecten"
                            ariaLabel="Alle projecten"
                            icon="true"
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
              <section className="mb-16 md:mb-32">
                <Designers></Designers>
              </section>
              <section className="mb-6 md:mb-32">
                <div
                  style={{
                    maxWidth: "592px",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                  className="text-left md:text-center"
                >
                  <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                    Waar wij voor staan
                  </h2>
                  <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                    We zijn een innovatieve en duurzame partner die u voorziet
                    van professioneel advies en creatieve ontwerpen.
                  </p>
                </div>
                <div className="flex flex-row flex-wrap">
                  <div className="w-full md:w-1/3">
                    <HoverCard
                      src="/innovatief-duurzaam.svg"
                      title="Innovatief & Duurzaam"
                      description="Een innovatief ontwerp betekent een uniek huis oftewel een duurzame woning met toekomst"
                    ></HoverCard>
                  </div>
                  <div className="w-full md:w-1/3">
                    <HoverCard
                      src="/creatief-bevlogen.svg"
                      title="Creatief & bevlogen"
                      description="Wij vertalen op een creatieve en bevlogen wijze uw dromen en plannen in tastbare ontwerpen"
                    ></HoverCard>
                  </div>
                  <div className="w-full md:w-1/3">
                    <HoverCard
                      src="/professioneel-advies.svg"
                      title="Professioneel advies"
                      description="Klantgerichte begeleiding en betrouwbaar advies tijdens realisatie van uw project"
                    ></HoverCard>
                  </div>
                </div>
              </section>
            </Layout>
            <section className="mb-12 md:mb-32">
              <div
                className="h-auto w-full bg-cover bg-bottom pt-24 pb-24"
                style={{
                  background: `linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.60) 30%, rgba(31,31,31,0.40) 50%, rgba(31,32,31,0.60) 80%, rgba(31,31,31,1) 100%), url(/images/home/aandacht-voor-jou.jpg)`,
                  backgroundPosition: "bottom",
                }}
              >
                <Layout>
                  <div className="text-center">
                    <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                      Wat mensen over ons zeggen
                    </h2>
                  </div>
                  <TestimonialSlider></TestimonialSlider>
                </Layout>
              </div>
            </section>
            <section className="mb-12 md:mb-32">
              <Layout>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full mb-12 md:w-1/2 md:mb-0 md:mr-8">
                    <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                      Neem vrijblijvend contact op
                    </h2>
                    <p className="text-base font-body text-gray-200 font-normal mb-8 antialiased">
                      Overtuigd dat wij de juiste partner zijn voor uw plannen
                      en projecten? Wij helpen je graag! Neem vrijblijvend
                      contact met ons op.
                    </p>
                    <div className="mt-4 lg:mt-6">
                      <Button
                        label="Contact"
                        href="/contact"
                        ariaLabel="Contact"
                        icon="true"
                      ></Button>
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundImage: "url(/images/home/contactcard.jpg)",
                    }}
                    className="flex flex-col md:w-1/2 items-end md:ml-8 bg-yellow-100 rounded bg-cover px-8 py-8"
                  >
                    <div className="flex flex-col items-start">
                      <div className="flex flex-row mb-6">
                        <div className="h-12 w-12 mr-2 rounded bg-background">
                          <img src="/images/home/jochem-avatar.png"></img>
                        </div>
                        <div className="ml-2">
                          <h3 className="text-lg font-heading text-background font-semibold antialiased">
                            0628092228
                          </h3>
                          <p className="text-sm font-body text-background font-light antialiased">
                            Bel met Jochem
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="h-12 w-12 mr-2 rounded bg-background">
                          <img src="/images/home/koen-avatar.png"></img>
                        </div>
                        <div className="ml-2">
                          <h3 className="text-lg font-heading text-background font-semibold antialiased">
                            0642023612
                          </h3>
                          <p className="text-sm font-body text-background font-light antialiased">
                            Bel met Koen
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Layout>
            </section>
          </main>
          <Layout>
            <FooterMenu />
          </Layout>
        </div>
      </body>
    </html>
  );
}
