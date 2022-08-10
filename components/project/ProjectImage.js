function ProjectImage(props) {
  return (
    <div>
      <img
        className="mb-4 rounded"
        src={props.src}
        alt={props.description}
      ></img>
      <div className="border-l-4 border-yellow-500">
        <p className="ml-4 text-sm font-body text-gray-200 font-normal antialiased">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectImage;
