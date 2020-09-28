import { useMediaQuery } from "beautiful-react-hooks";
import TestimonialSlide from "./TestimonialSlide";

//Import pure-react-carousel
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

function TestimonialSlider() {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <CarouselProvider
      naturalSlideWidth={isLarge ? 100 : 100}
      naturalSlideHeight={isLarge ? 30 : 50}
      totalSlides={3}
      isIntrinsicHeight={isLarge ? false : true}
    >
      {" "}
      <Slider>
        <Slide index={0}>
          <TestimonialSlide
            testimonial="In de zomer van 2018 zijn we samen met Oostz-ontwerp gestart met het ontwerp van onze nieuwbouwwoning te Heeten. Aan de hand van onze wensen zijn we samen verschillende plannen gaan uitwerken om vervolgens tot een definitief ontwerp te komen. Een goed ontwerp gaat verder dan alleen het eerste aanzicht, Oostz-ontwerp neemt direct de bouwkundige aspecten mee in het ontwerp. De bouwbegeleiding vanuit Oostz-ontwerp was super, het maken van duidelijke afspraken middels goede communicatie ligt hieraan ten grondslag. Ook tijdens de realisatie kijkt Oostz-ontwerp met een kritisch oog mee, zodat er waar nodig kan worden bijgestuurd. Al met al mogen wij terugkijken op een leuke tijd, waarin Oostz-ontwerp zeker aan bijgedragen heeft. "
            author="Anouk & Jort"
          ></TestimonialSlide>
        </Slide>
        <Slide index={1}>
          <TestimonialSlide
            testimonial="In december 2018 zijn we uitgeloot voor een kavel op nieuwbouw plattenberg te Wijhe. Wij zochten een betrokken partner die ons kon begeleiden in dit gehele traject.
            Oostz-ontwerp was deze partner. Hierin waren de eerste 2 á 3 gesprekken doorslaggevend. We spraken onze wensen uit en deze werder vervolgens netjes geïnventariseerd. Oostz-ontwerp vertelt op een duidelijke manier wat de mogelijkheden zijn op onze kavel.
            Openheid in zaken, meedenken in oplossingen en adviseren in opties is zeker wat je van Oostz-ontwerp kan verwachten. Als de mogelijkheid zich weer voordoet in de toekomst dan gaan wij zeker weer met Oostz-ontwerp om tafel.
            "
            author="Familie Klein Ovink"
          ></TestimonialSlide>
        </Slide>
        <Slide index={2}>
          <TestimonialSlide
            testimonial="Halverwege 2019 besloten we een huis te gaan bouwen op het nieuwbouwplan de Mastenbroek in Hellendoorn. De keus voor een aannemer viel op Bajo-bouw & IJzerwerken in Mariënheem. Via hun kwamen we in contact met Oostz-ontwerp. De samenwerking hebben we als zeer prettig ervaren. Oostz-ontwerp was altijd goed bereikbaar en gaf ons goed advies over de ideeën en wensen waarmee wij aankwamen."
            author="Familie Daggert"
          ></TestimonialSlide>
        </Slide>
      </Slider>
      <div className="flex justify-center mt-2 md:mt-4">
        <ButtonBack className="p-2 rounded mr-2 hover:border-yellow-100">
          <svg
            className="fill-current text-yellow-300"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.195 8.49l3.186 3.307a.644.644 0 00.726.15.673.673 0 00.3-.255.711.711 0 00.112-.384V9.212c0-.046.017-.09.048-.123a.164.164 0 01.118-.05H15c.265 0 .52-.11.707-.305A1.06 1.06 0 0016 8c0-.275-.105-.54-.293-.734A.982.982 0 0015 6.962H4.685a.164.164 0 01-.118-.051.177.177 0 01-.048-.123V4.692c0-.137-.04-.27-.113-.384a.673.673 0 00-.299-.255.644.644 0 00-.726.15L.195 7.51A.706.706 0 000 8c0 .184.07.36.195.49z" />
          </svg>
        </ButtonBack>
        <ButtonNext className="p-2 rounded mr-2 hover:border-yellow-100">
          <svg
            className="fill-current text-yellow-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8l-3-4h-1l-1 1v2H1 0a1 1 0 000 2h11v2l1 1a1 1 0 001 0l3-4z" />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default TestimonialSlider;
