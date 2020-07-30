function Landing(props) {
  const mobile = props.mobile;
  const tablet = props.tablet;
  const laptop = props.desktop;
  const desktop = props.desktop;

  return (
    <section>
      <img
        src={mobile}
        srcSet={`${mobile} 460w, ${tablet} 460w, ${laptop} 460w, ${desktop} 2560w`}
        alt={props.alt}
      ></img>
    </section>
  );
}

export default Landing;
