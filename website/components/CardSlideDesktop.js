import Layout from "../components/Layout";

function CardSlideDesktop(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        background: `linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0.70) 25%, rgba(31,31,31,0.2) 50%, rgba(31,31,31,0.70) 75%, rgba(31,31,31,1) 100%), url(${props.backgroundImage})`,
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
            <a href="#section1">
              <svg
                className="animate-bounce"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M12.49 19.805l3.307-3.186a.644.644 0 00.15-.726.672.672 0 00-.255-.3.71.71 0 00-.384-.111H13.21a.176.176 0 01-.122-.05.163.163 0 01-.05-.117V5c0-.265-.11-.52-.305-.707A1.059 1.059 0 0012 4c-.275 0-.54.105-.734.293A.981.981 0 0010.96 5v10.315a.163.163 0 01-.05.118.176.176 0 01-.122.049H8.692a.71.71 0 00-.384.112.672.672 0 00-.255.299.644.644 0 00.15.726l3.308 3.186c.13.125.305.195.489.195s.36-.07.49-.195z"
                    fill="#1F1F1F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path
                      fill="#fff"
                      transform="rotate(-90 12 8)"
                      d="M0 0h16v16H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CardSlideDesktop;
