function CardSmall(props) {
  return (
    <div className="mb-6 md:p-3">
      <div className="flex flex-row items-center mb-6">
        <img src={props.src} className="mr-2"></img>
        <h3 className="text-xl font-heading text-white font-semibold antialiased">
          {props.title}
        </h3>
      </div>
      <div className="flex flex-row items-center mb-2">
        <div className="h-3 w-3 border-2 border-yellow-300 ml-1 mr-2 rounded-sm "></div>
        <p className="text-sm font-body text-gray-200 font-normal antialiased">
          {props.item1}
        </p>
      </div>
      <div className="flex flex-row items-center mb-2">
        <div className="h-3 w-3 border-2 border-yellow-300 ml-1 mr-2 rounded-sm "></div>
        <p className="text-sm font-body text-gray-200 font-normal antialiased">
          {props.item2}
        </p>
      </div>
      <div className="flex flex-row items-center mb-2">
        <div className="h-3 w-3 border-2 border-yellow-300 ml-1 mr-2 rounded-sm "></div>
        <p className="text-sm font-body text-gray-200 font-normal antialiased">
          {props.item3}
        </p>
      </div>
    </div>
  );
}

export default CardSmall;
