import Head from "next/head";
import ProjectHeader from "../components/ProjectHeader";
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
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ProjectHeader />
          <div>
            <div className="flex flex-row w-full">
              <div className="w-full">
                <img className="bg-contain" src="/mulder/mulder-1-xl.jpg"></img>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}
