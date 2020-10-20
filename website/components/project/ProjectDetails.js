function ProjectDetails(props) {
  const social = {
    facebook: "",
    linkedin: "",
  };

  return (
    <section className="mb-16 md:mb-32">
      <div
        style={{
          maxWidth: "592px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        className="text-left md:text-center mt-12"
      >
        <h4 className="text-white">{props.year}</h4>
        <h1 className="text-2xl md:text-3xl font-heading text-white font-extrabold mb-2 antialiased">
          {props.title}
        </h1>
        <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
          {props.description}
        </p>
      </div>
      <div className="flex flex-row md:justify-center">
        <div className="inline-flex mr-6">
          <svg
            className="fill-current text-white mr-1"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path d="M10.5 4a4.338 4.338 0 00-4.333 4.333c0 1.902 2.708 6.514 3.872 8.41a.542.542 0 00.922-.001c1.164-1.895 3.872-6.505 3.872-8.409A4.338 4.338 0 0010.5 4zm0 6.23a1.896 1.896 0 110-3.792 1.896 1.896 0 010 3.791z" />
            </g>
            <defs>
              <clipPath id="clip0">
                <path transform="translate(4 4)" d="M0 0h13v13H0z" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-sm font-body text-gray-200 font-normal antialiased">
            {props.location}
          </p>
        </div>
        <div className="inline-flex">
          <svg
            className="fill-current text-white mr-1"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.57 10.153l6.578 6.52.01.009a1.112 1.112 0 001.568-.012l3.947-3.98a1.127 1.127 0 00.327-.802 1.136 1.136 0 00-.334-.8l-6.557-6.505A2.086 2.086 0 008.743 4H5.117c-.296 0-.58.119-.79.33-.21.211-.327.498-.327.797l.004 3.66c.02.509.221.993.565 1.366zm1.944-2.772a.85.85 0 01.517-.78.831.831 0 01.913.182.848.848 0 01-.593 1.443.834.834 0 01-.592-.247.849.849 0 01-.245-.598z" />
          </svg>
          <p className="text-sm font-body text-gray-200 font-normal antialiased">
            {props.projectType}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
