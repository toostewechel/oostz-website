function CardSlide(props) {
  return (
    <div className="relative m-3">
      <div className="absolute border border-gray-200 -mt-3 -mr-3 mb-3 ml-3 top-0 right-0 bottom-0 left-0 rounded"></div>
      <div className="relative flex items-center md:grid md:grid-cols-12 md:grid-rows-6 bg-yellow-100 rounded overflow-hidden">
        <div className="hidden md:row-start-1 md:row-end-7 md:col-start-6 md:col-end-13 md:flex md:items-end">
          <img src={props.src} alt={props.alt}></img>
        </div>
        <div className="p-6 md:row-start-1 md:row-end-7 md:col-start-1 md:col-end-6 flex flex-col justify-center md:ml-8 ">
          <h1 className="text-3xl font-heading text-heading font-extrabold mb-2 antialiased">
            {props.title}
          </h1>
          <p className="text-base font-body text-body mb-6 antialiased">
            {props.description}
          </p>
          <button className="self-start px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300">
            Lees meer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlide;
