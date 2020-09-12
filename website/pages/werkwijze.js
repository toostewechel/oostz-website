import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Collapsible from "../components/Collapsible";
import Stack from "../components/Stack";
import Button from "../components/Button";

export default function Werkwijze() {
  return (
    <body className="bg-background ">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.svgg" />
        </Head>
        <Header></Header>
        <main className="mt-20">
          <Layout>
            <section className="mt-10 mb-10 lg:mt-20 lg:mb-24">
              <div className="flex flex-row">
                <div className="w-full lg:w-2/3">
                  <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
                    Onze werkwijze
                  </h1>
                  <p
                    style={{ maxWidth: "592px" }}
                    className="text-base font-body text-gray-200 font-normal mb-10 antialiased"
                  >
                    Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                    realisatie van uw project van ontwerp tot oplevering. Wij
                    zijn sterk in het klantgericht meedenken en hebben veel
                    ervaring in de bouwsector.
                  </p>
                </div>
                <div className="hidden lg:flex lg:w-1/3 lg:justify-end">
                  <img src="/werkwijze.svg"></img>
                </div>
              </div>
            </section>
            <section className="mb-12 lg:mb-24">
              <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/3 md:pr-4">
                  <div className="flex flex-row align-center mb-4">
                    <img src="/concept-icon.svg" className="mr-2"></img>
                    <h3 className="text-xl font-heading text-white font-semibold antialiased ">
                      Concept
                    </h3>
                  </div>
                  <p className="text-base md:text-sm font-body text-gray-200 font-normal mb-10 antialiased">
                    In deze fase maken we <strong>laagdrempelig </strong>
                    kennnis, onderzoeken we uw wensen en bepalen we samen de
                    haalbaarheid van uw plannen.
                  </p>
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  <Collapsible
                    title="Kennismaking"
                    subtitle="Leer ons kennen en vertel uw plannen"
                    src="/kennismaking.svg"
                    description="Vertel ons vrijblijvend uw verhaal en maak kennis met Oostz ontwerp. Samen bespreken wij uw wensen en ideeën en wat u van ons kunt verwachten."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Vergunning- en bestemmingsplan"
                    subtitle="Wij zoeken uit of er gebouwd mag worden"
                    src="/vergunning.svg"
                    description="We kijken aan de hand van het bestemmingsplan wat voor mogelijkheden uw locatie biedt. Het bestemmingsplan schrijft de regels omtrent uw project voor. Met deze informatie maken wij een passend ontwerp voor uw project."
                  ></Collapsible>
                </div>
              </div>
            </section>
            <section className="mb-12 lg:mb-24">
              <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/3 md:pr-4">
                  <div className="flex flex-row align-center mb-4">
                    <img src="/ontwerp-icon.svg" className="mr-2"></img>
                    <h3 className="text-xl font-heading text-white font-semibold antialiased ">
                      Ontwerp
                    </h3>
                  </div>
                  <p className="text-base md:text-sm font-body text-gray-200 font-normal mb-10 antialiased">
                    In deze fase gaan we aan de slag. We vertalen op{" "}
                    <strong>creatieve </strong>
                    en <strong> bevlogen </strong>wijze uw dromen en plannen in
                    tastbare ontwerpen.
                  </p>
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  <Collapsible
                    title="Bouwkundig schetsontwerp"
                    subtitle="De ruwe vormgeving van uw plannen"
                    src="/bouwkundig-schetsontwerp.svg"
                    description="Aan de hand van uw ideeën en onze vakkundigheid ontwerpen wij uw project op een creatieve wijze waarbij kwaliteit hoog in het vaandel staat."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="3D Impressies"
                    subtitle="Hoe het eruit gaat zien"
                    src="/3d-impressies.svg"
                    description="Oostz ontwerp streeft ernaar om u een zo goed mogelijk beeld te geven van uw project. Doormiddel van realistische 3D impressies visualiseren wij uw project!"
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Kostenraming"
                    subtitle="De verwachte kosten voor de realisatie"
                    src="/kostenraming.svg"
                    description="Wij beschikken over kennis en actuele richtprijzen, zowel bouwkundig als op het gebied van installaties. Op basis van deze gegevens maken we een kostenindicatie voor uw project."
                  ></Collapsible>
                </div>
              </div>
            </section>
          </Layout>
          <section className="mb-12 lg:mb-24">
            <div
              className="h-auto w-full bg-cover  pt-16 pb-12"
              style={{
                backgroundImage: "url(/background-testimonial-2k.png)",
              }}
            >
              <Layout>
                <div className="flex">
                  <div className="hidden md:flex md:w-1/2 lg:w-2/3"></div>
                  <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-100 rounded p-6">
                    <h2 className="text-2xl font-heading text-heading font-extrabold mb-2 antialiased">
                      Ontwerp laten maken?
                    </h2>
                    <p className="text-base font-body text-body font-normal mb-6 antialiased">
                      Overtuigd dat wij de juiste partner zijn voor uw plannen
                      en projecten? Wij helpen je graag! Neem vrijblijvend
                      contact met ons op.
                    </p>
                    <Button label="Neem contact op"></Button>
                  </div>
                </div>
              </Layout>
            </div>
          </section>
          <Layout>
            <section className="mb-12 lg:mb-24">
              <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/3 md:pr-4">
                  <div className="flex flex-row align-center mb-4">
                    <img src="/vergunning-icon.svg" className="mr-2"></img>
                    <h3 className="text-xl font-heading text-white font-semibold antialiased ">
                      Vergunning
                    </h3>
                  </div>
                  <p className="text-base md:text-sm font-body text-gray-200 font-normal mb-10 antialiased">
                    In deze fase wordt er toegewerkt naar een definitief
                    bouwplan en dienen wij deze in bij uw gemeente. Wij
                    ontzorgen u volledig in dit traject.
                  </p>
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  <Collapsible
                    title="Bouwkundig tekenwerk"
                    subtitle="Detail uitwerking van het schetsontwerp"
                    src="/bouwkundig-tekenwerk.svg"
                    description="Indien er een omgevingsvergunning en/of vooroverleg aangevraagd dient te worden verzorgen wij het benodigde tekenwerk conform de richtlijnen van uw gemeente."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Toetsing bouwbesluit"
                    subtitle="Voorkom problemen in een later stadium"
                    src="/toetsing-bouwbesluit.svg"
                    description="Bij het aanvragen van een omgevingsvergunning moet uw project voldoen aan het bouwbesluit. Oostz ontwerp toetst uw project aan het bouwbesluit en verzorgt de benodigde rapportages. Denk hierbij aan toetsing daglicht, energieprestatie coëfficiënt, milieuprestatie, ventilatie balans, functie en gebieden, installatiegeluid en eventueel particulier opdrachtgeverschap."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Constructieberekening"
                    subtitle="Alle benodigde berekeningen "
                    src="/constructieberekening.svg"
                    description="Om de kwaliteit van uw project te waarborgen dient er in de meeste gevallen een constructieberekening gemaakt te worden. Oostz Ontwerp heeft hiervoor een aantal betrouwbare partners. De constructieberekening is tevens in de meeste gevallen een vereiste bij het aanvragen van de omgevingsvergunning."
                  ></Collapsible>
                </div>
              </div>
            </section>
            <section className="mb-12 lg:mb-24">
              <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/3 md:pr-4">
                  <div className="flex flex-row align-center mb-4">
                    <img src="/uitvoering-icon.svg" className="mr-2"></img>
                    <h3 className="text-xl font-heading text-white font-semibold antialiased ">
                      Uitvoering
                    </h3>
                  </div>
                  <p className="text-base md:text-sm font-body text-gray-200 font-normal mb-10 antialiased">
                    De plannen zijn goedgekeurd en de aannemer is gekozen. De
                    realisatie kan beginnen! Ook in deze fase zijn wij niet uit
                    beeld en kunt u voor vragen,{" "}
                    <strong>professioneel advies</strong> en bouwbegeleiding bij
                    ons terecht.
                  </p>
                </div>
                <div className="w-full md:w-2/3 md:pl-4">
                  <Collapsible
                    title="Technische omschrijving"
                    subtitle="De technische details van uw project"
                    src="/technische-omschrijving.svg"
                    description="Een technische omschrijving bevat de te verwerken materialen, aan te leveren producten en diensten voor de bouw van uw project. Deze omschrijving is afgestemd op uw project en noodzakelijk om een correcte offerte te verkrijgen."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Werktekeningen"
                    subtitle="Alle tekeningen voor de aannemer"
                    src="/werktekeningen.svg"
                    description="Nadat een omgevingsvergunning is afgegeven is het mogelijk dat er werktekeningen vervaardigd worden voor de realisatie van uw project. Deze werktekeningen dragen zorg voor een correcte uitvoering van de details en materialen wat het project juist vorm geeft."
                  ></Collapsible>
                  <Stack size={12} />
                  <Collapsible
                    title="Bouwbegeleiding"
                    subtitle="Begeleiding tot de sleuteloverdracht"
                    src="/bouwbegeleiding.svg"
                    description="Het is zover, de realisatie gaat beginnen. Ook in deze fase zijn wij niet uit beeld. Voor vragen, advies & bouwbegeleiding kunt u bij Oostz ontwerp terecht."
                  ></Collapsible>
                </div>
              </div>
            </section>
            <Footer />
          </Layout>
        </main>
      </div>
    </body>
  );
}
