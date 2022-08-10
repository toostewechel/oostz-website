import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

function StyledDisclosurePanel(props) {
  return (
    <DisclosurePanel>
      <div className="pr-2 pl-2 md:pr-4 md:pl-4 pt-2 pb-6 rounded-bl-sm rounded-br-sm bg-yellow-100 ">
        {props.children}
      </div>
    </DisclosurePanel>
  );
}

function StyledDisclosureButton({ isOpen, title, subtitle, ...props }) {
  return (
    <DisclosureButton
      className="focus:outline-none"
      style={{ display: "block", width: "100%" }}
    >
      <div
        className={`${
          isOpen
            ? `p-2 md:p-4 flex rounded-t-sm items-center w-full justify-between bg-yellow-100`
            : `p-2 md:p-4 flex rounded-t-sm items-center w-full justify-between`
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="hidden md:flex">
            <img src={props.src} className="mr-3"></img>
          </div>
          <div className="flex flex-col items-start">
            <h4
              className={`${
                isOpen
                  ? `text-sm font-heading text-heading font-semibold antialiased `
                  : `text-sm font-heading text-white font-semibold antialiased `
              }`}
            >
              {title}
            </h4>
            <p
              className={`${
                isOpen
                  ? `text-sm font-body text-body font-normal antialiased truncate `
                  : `text-sm font-body text-gray-200 font-normal antialiased truncate `
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>
        {isOpen ? (
          <div
            style={{ width: "16px", height: "16px" }}
            className="flex-shrink"
          >
            <svg
              className="fill-current text-heading items-center"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path d="M8.038 2.98a1.533 1.533 0 011.153.52l6.54 7.434a1.231 1.231 0 01-1.848 1.626L8.163 6.06a.167.167 0 00-.25 0l-5.72 6.501a1.233 1.233 0 11-1.848-1.626l6.538-7.432a1.54 1.54 0 011.155-.523z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <div
            style={{ width: "16px", height: "16px" }}
            className="flex-shrink"
          >
            <svg
              className="fill-current text-white items-center"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path d="M8 13a1.534 1.534 0 01-1.153-.52L.307 5.045A1.231 1.231 0 012.155 3.42l5.72 6.502a.167.167 0 00.25 0l5.72-6.502a1.231 1.231 0 111.848 1.626l-6.538 7.432A1.54 1.54 0 018 13z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </div>
    </DisclosureButton>
  );
}

function Collapsible(props) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
      <StyledDisclosureButton
        isOpen={isOpen}
        src={props.src}
        title={props.title}
        subtitle={props.subtitle}
      ></StyledDisclosureButton>
      <StyledDisclosurePanel>
        <p className="text-base font-body text-body antialiased">
          {props.description}
        </p>
      </StyledDisclosurePanel>
    </Disclosure>
  );
}

export default Collapsible;
