function CardSlide() {
  return (
    <div>
      <div className="grid grid-cols-12 grid-rows-6 bg-yellow-100 rounded overflow-hidden">
        <div className="row-start-1 row-end-7 col-start-6 col-end-13 flex items-end">
          <img src="/slide1.png"></img>
        </div>
        <div className="row-start-1 row-end-7 col-start-1 col-end-6 flex flex-col justify-center ml-8 mr-8">
          <h1 className="text-3xl font-heading text-heading font-extrabold mb-2 antialiased">
            Sterk in ontwerp.
          </h1>
          <p className="text-base font-body text-body mb-6 antialiased">
            Wij werken met passie aan ontwerpen voor de verbouw, nieuwbouw en
            aanbouw. Altijd op maat en persoonlijk.
          </p>
          <button className="self-start px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300">
            Lees meer
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div className="h-3 w-3 border-2 border-yellow-300 bg-yellow-300 mr-3 rounded-sm"></div>
        <div className="h-3 w-3 border-2 border-gray-200 mr-3 rounded-sm"></div>
        <div className="h-3 w-3 border-2 border-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
}

export default CardSlide;
