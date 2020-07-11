function Image(props) {
  return (
    <div className="rounded m-2">
      <img src={props.src} alt={props.alt} className=""></img>;
    </div>
  );
}

export default Image;
