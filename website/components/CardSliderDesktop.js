import CardSlideDesktop from "./CardSlideDesktop";

//Import pure-react-carousel
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

function CardSliderDesktop() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={55}
      totalSlides={3}
      isIntrinsicHeight={true}
      isPlaying={true}
      interval={5000}
    >
      <Slider>
        <Slide index={0}>
          <CardSlideDesktop
            backgroundImage="/images/home/sterk-in-ontwerp-1.jpg"
            title="Sterk in ontwerp."
            description="Wij werken met passie aan ontwerpen voor de verbouw, nieuwbouw en aanbouw. Altijd op maat en persoonlijk."
          />
        </Slide>
        <Slide index={1}>
          <CardSlideDesktop
            backgroundImage="/images/home/oog-voor-details.jpg"
            title="Oog voor detail."
            description="Wij hebben een sterk oog voor detail, want alleen details maken van een gedegen ontwerp een mooi ontwerp."
          />
        </Slide>
        <Slide index={2}>
          <CardSlideDesktop
            backgroundImage="/images/home/aandacht-voor-jou.jpg"
            title="Aandacht voor jou."
            description="Ontwerpen draait om aandacht. Aandacht voor jouw wensen, de samenwerking en het resultaat."
          />
        </Slide>
      </Slider>
      <div className="flex justify-center lg:mt-2">
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

export default CardSliderDesktop;
