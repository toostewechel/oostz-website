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
              0628092228 - Jochem
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
              <path d="M19.115 15.34l-1.634-1.636a1.874 1.874 0 00-2.653 0l-.333.333a36.236 36.236 0 01-4.535-4.54l.333-.334a1.878 1.878 0 000-2.652L8.655 4.878a1.922 1.922 0 00-2.655 0l-.893.897a2.654 2.654 0 00-.334 3.33A36.117 36.117 0 0014.89 19.222a2.677 2.677 0 003.333-.333l.897-.898a1.874 1.874 0 000-2.651h-.004z" />
            </svg>
            <p className="text-sm font-body text-gray-200 font-normal antialiased">
              0642023612 - Koen
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
            <a href="https://www.instagram.com/" target="_blank">
              <div className="p-1">
                <svg
                  className="fill-current text-white"
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
