function ProjectDetails(props) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded">
          {props.projectType}
        </div>
        <div className="inline-flex">
          <div className="p-2">
            <a href="#">
              <svg
                className="fill-current text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.333 5.667H1.667A.333.333 0 001.333 6v8.667c0 .184.15.333.334.333h2.666c.184 0 .334-.15.334-.333V6a.333.333 0 00-.334-.333zM2.987 4.333A1.66 1.66 0 004.64 2.667C4.64 1.747 3.9 1 2.987 1a1.66 1.66 0 00-1.654 1.667c0 .92.74 1.666 1.654 1.666zM12.333 15h2a.333.333 0 00.334-.333v-5.6c0-2.514-1.42-3.734-3.407-3.734a2.807 2.807 0 00-2.113.847.273.273 0 01-.48-.18.333.333 0 00-.334-.333h-2A.333.333 0 006 6v8.667a.333.333 0 00.333.333h2a.333.333 0 00.334-.333v-5a1.667 1.667 0 113.333 0v5a.333.333 0 00.333.333z" />
              </svg>
            </a>
          </div>
          <div className="p-2">
            <a href="#">
              <svg
                className="fill-current text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.093 4.78a.332.332 0 00-.246-.113H9.333v-.94c0-.187.04-.4.34-.4h2a.294.294 0 00.234-.1A.334.334 0 0012 3V.333A.333.333 0 0011.667 0H8.78c-3.2 0-3.447 2.733-3.447 3.567v1.1H3.667A.333.333 0 003.333 5v2.667A.333.333 0 003.667 8h1.666v7.667a.333.333 0 00.334.333H9a.333.333 0 00.333-.333V8h2.234a.333.333 0 00.333-.3l.28-2.667a.335.335 0 00-.087-.253z" />
              </svg>
            </a>
          </div>
          <div className="p-2">
            <a href="#">
              <svg
                className="fill-current text-white"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.547 4.293a.333.333 0 00-.134-.58l-.526-.133a.334.334 0 01-.22-.467l.293-.593a.334.334 0 00-.387-.467l-1.333.374a.334.334 0 01-.293-.054A3.333 3.333 0 007.613 5.04v.24a.167.167 0 01-.146.167c-1.874.22-3.667-.734-5.6-2.96a.34.34 0 00-.34-.1.333.333 0 00-.194.28 5.053 5.053 0 00.307 3.28.167.167 0 01-.173.24L.72 6.04a.333.333 0 00-.38.393 3.433 3.433 0 001.58 2.52.167.167 0 010 .3l-.353.14a.333.333 0 00-.174.46 2.906 2.906 0 002.134 1.654.166.166 0 01.11.156.167.167 0 01-.11.157 7.292 7.292 0 01-2.86.553.34.34 0 00-.134.667 13.374 13.374 0 005.427 1.287 8.387 8.387 0 004.667-1.334 8.333 8.333 0 003.706-6.953v-.58a.334.334 0 01.12-.253l1.094-.914z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "592px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        className="text-left md:text-center mt-12"
      >
        <h4 className="text-white">{props.year}</h4>
        <h1 className="text-3xl font-heading text-white font-extrabold mb-2 antialiased">
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
    </div>
  );
}

export default ProjectDetails;
