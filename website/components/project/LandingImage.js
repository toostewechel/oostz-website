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
            background: `linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.60) 25%, rgba(31,31,31,0.2) 50%, rgba(31,31,31,0.60) 75%, rgba(31,31,31,1) 100%), url(${props.backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Layout>
            <div style={{ height: "75vh" }} className="flex items-center">
              <div className="hidden md:flex md:w-1/2 lg:w-2/3"></div>
              <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-500 rounded p-6">
                <h4
                  className="text-sm font-heading text-heading font-regular
                 antialiased"
                >
                  {props.category}
                </h4>
                <h1 className="text-3xl font-heading text-heading font-extrabold mb-4 antialiased">
                  {props.title}
                </h1>
                <div className="flex flex-row justify-between items-center">
                  <div className="px-3 py-2 bg-yellow-300 text-background text-sm font-body font-medium rounded">
                    {props.projectType}
                  </div>
                  <div className="inline-flex">
                    <div className="flex flex-row">
                      <a href="https://www.linkedin.com/feed/" target="_blank">
                        <div className="p-1 rounded-full hover:bg-yellow-300">
                          <svg
                            className="fill-current text-background"
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
                        <div className="p-1 rounded-full hover:bg-yellow-300">
                          <svg
                            className="fill-current text-background"
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
              </div>
            </div>
          </Layout>
        </div>
      )}
    </section>
  );
}

export default LandingImage;
