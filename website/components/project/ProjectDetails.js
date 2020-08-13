function ProjectDetails(props) {
  const social = {
    facebook: "",
    linkedin: "",
  };

  return (
    <section className="mb-16 md:mb-32">
      <div className="flex flex-row justify-between items-center">
        <div className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded">
          {props.projectType}
        </div>
        <div className="inline-flex">
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <div className="p-1">
                <svg
                  className="fill-current text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.333 9.667H5.667a.333.333 0 00-.334.333v8.667c0 .184.15.333.334.333h2.666c.184 0 .334-.15.334-.333V10a.333.333 0 00-.334-.333zM6.987 8.333A1.66 1.66 0 008.64 6.667C8.64 5.747 7.9 5 6.987 5a1.66 1.66 0 00-1.654 1.667c0 .92.74 1.666 1.654 1.666zM16.333 19h2a.333.333 0 00.334-.333v-5.6c0-2.514-1.42-3.734-3.407-3.734a2.807 2.807 0 00-2.113.847.274.274 0 01-.48-.18.333.333 0 00-.334-.333h-2A.333.333 0 0010 10v8.667a.334.334 0 00.333.333h2a.333.333 0 00.334-.333v-5a1.667 1.667 0 013.333 0v5a.334.334 0 00.333.333z" />
                </svg>
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <div className="p-1">
                <svg
                  className="fill-current text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.093 8.78a.332.332 0 00-.246-.113h-2.514v-.94c0-.187.04-.4.34-.4h2a.294.294 0 00.234-.1A.334.334 0 0016 7V4.333A.333.333 0 0015.667 4H12.78c-3.2 0-3.447 2.733-3.447 3.567v1.1H7.667A.333.333 0 007.333 9v2.667a.333.333 0 00.334.333h1.666v7.667a.333.333 0 00.334.333H13a.333.333 0 00.333-.333V12h2.234a.333.333 0 00.333-.3l.28-2.667a.335.335 0 00-.087-.253z" />
                </svg>
              </div>
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
    </section>
  );
}

export default ProjectDetails;
