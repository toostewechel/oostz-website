function Footer() {
  return (
    <footer className="bg-background">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div style={{ maxWidth: "420px" }}>
          <div className="flex flex-row">
            <div className="hidden md:flex items-start flex-shrink-0 flex-grow-0 mr-2">
              <img src="/images/icons/logo-64px.svg"></img>
            </div>
            <div className="mb-8 md:mb-0">
              <h4 className="text-base font-heading text-white font-semibold antialiased mb-2">
                Wie wij zijn
              </h4>
              <p className="text-sm font-body text-gray-200 font-normal antialiased">
                Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                realisatie van uw project van ontwerp tot oplevering.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-base md:text-base font-heading text-white font-semibold antialiased mb-2">
            Contact
          </h4>
          <div className="flex flex-row mb-1">
            <svg
              className="fill-current text-yellow-500 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.115 15.34l-1.634-1.636a1.874 1.874 0 00-2.653 0l-.333.333a36.236 36.236 0 01-4.535-4.54l.333-.334a1.878 1.878 0 000-2.652L8.655 4.878a1.922 1.922 0 00-2.655 0l-.893.897a2.654 2.654 0 00-.334 3.33A36.117 36.117 0 0014.89 19.222a2.677 2.677 0 003.333-.333l.897-.898a1.874 1.874 0 000-2.651h-.004z" />
            </svg>
            <p className="text-sm font-body text-gray-200 font-normal antialiased">
              0612345678
            </p>
          </div>
          <div className="flex flex-row mb-1">
            <svg
              className="fill-current text-yellow-500 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.925 7.888a.121.121 0 00-.133.026l-6.498 6.497a1.833 1.833 0 01-2.592 0L4.207 7.914a.12.12 0 00-.187.019A.121.121 0 004 8v8a1.333 1.333 0 001.333 1.333h13.334A1.334 1.334 0 0020 16V8a.12.12 0 00-.075-.112z" />
              <path d="M11.41 13.704a.835.835 0 001.179 0l6.457-6.457a.333.333 0 00.08-.341c-.073-.22-.277-.24-.46-.24H5.334c-.183 0-.388.02-.46.24a.333.333 0 00.08.34l6.457 6.458z" />
            </svg>
            <p className="text-sm font-body text-gray-200 font-normal antialiased">
              info@oostz-ontwerp.nl
            </p>
          </div>
          <div className="flex flex-row items-center">
            <svg
              className="fill-current text-yellow-500 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path d="M12 4a5.34 5.34 0 00-5.333 5.333c0 2.34 3.333 8.017 4.765 10.35a.666.666 0 001.136-.001c1.432-2.331 4.765-8.006 4.765-10.349A5.34 5.34 0 0012 4zm0 7.667A2.333 2.333 0 1112 7a2.333 2.333 0 010 4.667z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path transform="translate(4 4)" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm font-body text-gray-200 font-normal antialiased">
              Hellendoornseweg 44, Mariënheem
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-base font-heading text-white font-semibold antialiased mb-2">
            Volg ons
          </h4>
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
      <hr className="border-white mb-6"></hr>
      <div className="flex flex-row justify-between mb-8">
        <p className="text-sm font-body text-gray-200 font-normal antialiased">
          Copyright ©️ 2020 door{" "}
          <a href="https://snapshots.design/" target="_blank">
            snapshots.design
          </a>
        </p>
        <p className="text-sm font-body text-gray-200 font-normal antialiased">
          KvK: 12345678
        </p>
      </div>
    </footer>
  );
}

export default Footer;
