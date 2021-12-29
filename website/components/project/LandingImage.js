import { useMediaQuery } from "beautiful-react-hooks";
import Layout from "../Layout";

function LandingImage(props) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: isMobile ? "60vh" : "75vh",
          background: `linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.60) 25%, rgba(31,31,31,0.2) 50%, rgba(31,31,31,0.60) 75%, rgba(31,31,31,1) 100%), url(${props.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "center" : null,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Layout>
          <div style={{ height: "75vh" }} className="flex items-center">
            <div className="hidden md:flex md:w-1/2 lg:w-2/3"></div>
            <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-500 rounded p-4 md:p-6">
              <h4
                className="text-sm font-heading text-heading font-regular
                 antialiased"
              >
                {props.category}
              </h4>
              <h1 className="text-2xl md:text-3xl font-heading text-heading font-extrabold mb-4 antialiased">
                {props.title}
              </h1>
              <div className="flex flex-row justify-between items-center">
                <div className="px-3 py-2 bg-yellow-300 text-background text-sm font-body font-medium rounded">
                  {props.projectType}
                </div>
                <div className="inline-flex">
                  <div className="flex flex-row">
                    <a
                      href="https://www.linkedin.com/company/oostz-ontwerp/"
                      target="_blank"
                      rel="noopener"
                    >
                      <div className="p-1 rounded hover:bg-yellow-300">
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
                    <a
                      href="https://www.facebook.com/OOSTZontwerp/"
                      target="_blank"
                      rel="noopener"
                    >
                      <div className="p-1 rounded hover:bg-yellow-300">
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
                    <a
                      href="https://www.instagram.com/oostzontwerp/"
                      target="_blank"
                      rel="noopener"
                    >
                      <div className="p-1 rounded hover:bg-yellow-300">
                        <svg
                          className="fill-current text-background"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.6667 4H8.33333C7.1846 4.00176 6.08343 4.45888 5.27115 5.27115C4.45888 6.08343 4.00176 7.1846 4 8.33333V15.6667C4.00176 16.8154 4.45888 17.9166 5.27115 18.7288C6.08343 19.5411 7.1846 19.9982 8.33333 20H15.6667C16.8154 19.9982 17.9166 19.5411 18.7288 18.7288C19.5411 17.9166 19.9982 16.8154 20 15.6667V8.33333C19.9982 7.1846 19.5411 6.08343 18.7288 5.27115C17.9166 4.45888 16.8154 4.00176 15.6667 4V4ZM12 15.6667C11.2748 15.6667 10.5659 15.4516 9.96291 15.0487C9.35993 14.6458 8.88996 14.0732 8.61244 13.4032C8.33492 12.7332 8.26231 11.9959 8.40379 11.2847C8.54527 10.5734 8.89448 9.92007 9.40728 9.40728C9.92007 8.89448 10.5734 8.54527 11.2847 8.40379C11.9959 8.26231 12.7332 8.33492 13.4032 8.61244C14.0732 8.88996 14.6458 9.35993 15.0487 9.96291C15.4516 10.5659 15.6667 11.2748 15.6667 12C15.6667 12.9725 15.2804 13.9051 14.5927 14.5927C13.9051 15.2804 12.9725 15.6667 12 15.6667ZM16.3333 8.33333C16.1356 8.33333 15.9422 8.27468 15.7778 8.1648C15.6133 8.05492 15.4851 7.89874 15.4095 7.71602C15.3338 7.53329 15.314 7.33222 15.3525 7.13824C15.3911 6.94426 15.4864 6.76608 15.6262 6.62623C15.7661 6.48637 15.9443 6.39113 16.1382 6.35255C16.3322 6.31396 16.5333 6.33377 16.716 6.40945C16.8987 6.48514 17.0549 6.61331 17.1648 6.77776C17.2747 6.94221 17.3333 7.13555 17.3333 7.33333C17.3333 7.59855 17.228 7.8529 17.0404 8.04044C16.8529 8.22798 16.5986 8.33333 16.3333 8.33333Z" />
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
    </section>
  );
}

export default LandingImage;
