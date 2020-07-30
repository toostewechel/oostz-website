function SquareImage(props) {
  return (
    <div>
      <img className="mb-6" src={props.src} alt={props.alt}></img>
      <div className="border-l-4 border-yellow-500">
        <p className="ml-4 text-sm font-body text-gray-200 font-normal antialiased">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default SquareImage;
