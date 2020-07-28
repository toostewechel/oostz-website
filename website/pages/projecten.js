import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardSlide from "../components/CardSlide";

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
          <div className="mt-16">
            <img src="/mulder1.png"></img>
          </div>
        </main>
      </div>
    </body>
  );
}
