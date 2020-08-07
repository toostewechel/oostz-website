function TestimonialSlide(props) {
  return (
    <div className="z-10 flex flex-col items-center text-center mx-auto w-full md:w-3/4">
      <h2 className="text-2xl font-heading text-white font-extrabold mb-6 antialiased">
        {props.title}
      </h2>
      <p className="text-base md:text-base text-white font-body mb-6 antialiased">
        {props.testimonial}
      </p>
      <p className="text-sm text-white font-body mb-6 antialiased">
        - {props.author} -
      </p>
    </div>
  );
}

export default TestimonialSlide;
