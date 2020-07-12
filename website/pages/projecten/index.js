import Head from "next/head";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import CardSlide from "../../components/CardSlide";

//Import pure-react-carousel
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function Projecten() {
  return (
    <body className="bg-background ">
      <div className="container mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header></Header>
          <Layout>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={3}
              isPlaying={true}
              interval={4000}
              infinite={false}
            >
              {" "}
              <Slider>
                <Slide index={0}>
                  <CardSlide
                    src="/slide1.png"
                    title="Sterk in ontwerp."
                    description="Wij werken met passie aan ontwerpen voor de verbouw, nieuwbouw en aanbouw. Altijd op maat en persoonlijk."
                  ></CardSlide>
                </Slide>
                <Slide index={1}>
                  <CardSlide
                    src="/slide2.png"
                    title="Oog voor detail."
                    description="Wij hebben een sterk oog voor detail, want alleen details maken van een gedegen ontwerp een mooi ontwerp."
                  ></CardSlide>
                </Slide>
                <Slide index={2}>
                  <CardSlide
                    src="/slide3.png"
                    title="Aandacht voor jou."
                    description="Ontwerpen draait om aandacht. Aandacht voor jouw wensen, de samenwerking en het resultaat. "
                  ></CardSlide>
                </Slide>
              </Slider>
              <div className="flex justify-center">
                <ButtonBack className="bg-yellow-300 p-2 rounded mr-2">
                  <img src="ArrowLeft.svg"></img>
                </ButtonBack>
                <ButtonNext className="bg-yellow-300 p-2 rounded">
                  <img src="ArrowRight.svg"></img>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </Layout>
        </main>
      </div>
    </body>
  );
}
