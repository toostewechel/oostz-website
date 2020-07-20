import { useMediaQuery } from "beautiful-react-hooks";
import CardSlide from "../components/CardSlide";

//Import pure-react-carousel
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

function HomeSlider() {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <CarouselProvider
      naturalSlideWidth={isLarge ? 100 : 100}
      naturalSlideHeight={isLarge ? 48 : 60}
      totalSlides={3}
      isIntrinsicHeight={isLarge ? false : true}
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
      <div className="flex justify-center mt-2 md:mt-4">
        <ButtonBack className="border border-background p-2 rounded mr-2 hover:border-yellow-100">
          <svg
            className="fill-current text-yellow-300"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.195 8.49l3.186 3.307a.644.644 0 00.726.15.673.673 0 00.3-.255.711.711 0 00.112-.384V9.212c0-.046.017-.09.048-.123a.164.164 0 01.118-.05H15c.265 0 .52-.11.707-.305A1.06 1.06 0 0016 8c0-.275-.105-.54-.293-.734A.982.982 0 0015 6.962H4.685a.164.164 0 01-.118-.051.177.177 0 01-.048-.123V4.692c0-.137-.04-.27-.113-.384a.673.673 0 00-.299-.255.644.644 0 00-.726.15L.195 7.51A.706.706 0 000 8c0 .184.07.36.195.49z" />
          </svg>
        </ButtonBack>
        <ButtonNext className="border border-background p-2 rounded mr-2 hover:border-yellow-100">
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

export default HomeSlider;
