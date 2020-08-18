import { useMediaQuery } from "beautiful-react-hooks";
import Layout from "../Layout";

function LandingImage(props) {
  const isDektop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section>
      {isMobile && (
        <div>
          <img src={props.mobileImage} alt={props.alt}></img>
        </div>
      )}
      {isDektop && (
        <div
          style={{
            width: "100%",
            height: "75vh",
            background: `linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.60) 25%, rgba(31,31,31,0.2) 50%, rgba(49,32,43,0.60) 75%, rgba(31,31,31,1) 100%), url(${props.backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Layout>
            <div style={{ height: "75vh" }} className="flex items-center">
              <div className="hidden md:flex md:w-1/2 lg:w-2/3"></div>
              <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-500 rounded p-6">
                <h1 className="text-3xl font-heading text-heading font-extrabold mb-2 antialiased">
                  {props.title}
                </h1>
                <p className="text-base font-body text-body font-normal mb-6 antialiased">
                  {props.description}
                </p>
                <div className="flex flex-row">
                  <div className="inline-flex mr-6">
                    <svg
                      className="fill-current text-background mr-1"
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
                    <p className="text-sm font-body text-background font-normal antialiased">
                      {props.location}
                    </p>
                  </div>
                  <div className="inline-flex">
                    <svg
                      className="fill-current text-background mr-1"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.57 10.153l6.578 6.52.01.009a1.112 1.112 0 001.568-.012l3.947-3.98a1.127 1.127 0 00.327-.802 1.136 1.136 0 00-.334-.8l-6.557-6.505A2.086 2.086 0 008.743 4H5.117c-.296 0-.58.119-.79.33-.21.211-.327.498-.327.797l.004 3.66c.02.509.221.993.565 1.366zm1.944-2.772a.85.85 0 01.517-.78.831.831 0 01.913.182.848.848 0 01-.593 1.443.834.834 0 01-.592-.247.849.849 0 01-.245-.598z" />
                    </svg>
                    <p className="text-sm font-body text-background font-normal antialiased">
                      {props.projectType}
                    </p>
                  </div>
                </div>
                <div className="flex flex-shrink-0 flex-grow-0 pt-2 pb-2">
                  {/* <a href="#section1">
                    <img src="/images/icons/arrow-down.svg"></img>
                  </a> */}
                </div>
              </div>
            </div>
          </Layout>
        </div>
      )}
    </section>
  );
}

export default LandingImage;
