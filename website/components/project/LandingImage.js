import { useMediaQuery } from "beautiful-react-hooks";

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
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${props.desktopImage}` }}
            className="relative h-screen w-screen overflow-hidden bg-cover"
          ></div>
          <div className="absolute bottom-1/20 left-1/2 transform -translate-x-1/2">
            <a href="#projectdetails">
              <div className="p-3 bg-yellow-500 rounded">
                <svg
                  className="fill-current text-background"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M8 13a1.534 1.534 0 01-1.153-.52L.307 5.045A1.231 1.231 0 012.155 3.42l5.72 6.502a.167.167 0 00.25 0l5.72-6.502a1.231 1.231 0 111.848 1.626l-6.538 7.432A1.54 1.54 0 018 13z"
                      fill="#1F1F1F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default LandingImage;
