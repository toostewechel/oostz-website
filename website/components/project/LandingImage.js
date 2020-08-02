import { useMediaQuery } from "beautiful-react-hooks";

function LandingImage(props) {
  const isDektop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="md:h-screen md:w-screen">
      {isMobile && <img src={props.mobileImage} alt={props.alt}></img>}
      {isDektop && <img src={props.desktopImage} alt={props.alt}></img>}
    </section>
  );
}

export default LandingImage;
