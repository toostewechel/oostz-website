function ListItem(props) {
  return (
    <div className="flex flex-row items-center">
      <div className="hidden md:flex">
        <img src={props.src} className="mr-3"></img>
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-sm font-heading text-white font-semibold antialiased">
          {props.title}
        </h4>
        <p className="text-sm font-body text-gray-200 font-normal antialiased truncate">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

export default ListItem;
