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
            >
              {" "}
              <Slider>
                <Slide index={0}>
                  <CardSlide></CardSlide>
                </Slide>
                <Slide index={1}>
                  <CardSlide></CardSlide>
                </Slide>
                <Slide index={2}>
                  <CardSlide></CardSlide>
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
