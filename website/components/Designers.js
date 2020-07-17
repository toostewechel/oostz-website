import React, { useState } from "react";

const jochemtepperik = {
  avatar: "/designer1.png",
  name: "Jochem Tepperik",
  linkedin: "https://www.linkedin.com/in/jochem-tepperik-b0bbba141/",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "Mijn missie als bouwkundig ontwerper is om samen de vertaling te maken van een esthetisch ontwerp naar een technisch ontwerp dat geheel aansluit op uw wensen en ideeën. Ik vind het fantastisch om hierin als creatieve schakel te fungeren en uw droom om te zetten in een tastbaar resultaat.",
};

const koenklijnvelderman = {
  avatar: "/designer2.png",
  name: "Koen Klijn Velderman",
  linkedin: "https://www.linkedin.com/in/jochem-tepperik-b0bbba141/",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "'Make it simple, but significant.' Ontwerpen is voor mij eigenzinnig, uniek en functioneel. Uw wensen staan hierin centraal, met een persoonlijk en uniek ontwerp als gevolg. Het is een prachtig proces van schets tot eindresultaat, waarbij ik u graag begeleid.",
};

function Designers() {
  const [toggleDesigner, setToggleDesigner] = useState(true);

  const avatar = toggleDesigner
    ? jochemtepperik.avatar
    : koenklijnvelderman.avatar;

  const fullname = toggleDesigner
    ? jochemtepperik.name
    : koenklijnvelderman.name;

  const jobtitle = toggleDesigner
    ? jochemtepperik.jobtitle
    : koenklijnvelderman.jobtitle;

  const description = toggleDesigner
    ? jochemtepperik.description
    : koenklijnvelderman.description;

  const linkedin = toggleDesigner
    ? jochemtepperik.linkedin
    : koenklijnvelderman.linkedin;

  return (
    <div className="flex flex-row">
      <div className="flex w-1/3 justify-center">
        <img src={avatar}></img>
      </div>
      <div className="flex flex-col w-2/3 justify-center">
        <div className="flex inline-flex mb-8">
          <button
            className={`${
              toggleDesigner
                ? `p-4 mr-2 rounded bg-yellow-300`
                : `p-4 mr-2 rounded`
            }`}
            onClick={() => setToggleDesigner(true)}
          >
            <svg
              className={`${
                toggleDesigner
                  ? `fill-current text-background`
                  : `fill-current text-white`
              }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 14v2h7l1-4 1 4h7v-2a2 2 0 00-1-1 10 10 0 00-5-2v-1a5 5 0 003-4V5A5 5 0 003 5v1a5 5 0 003 4v1c-2 0-4 0-5 2a2 2 0 00-1 1zm5-8V5a5 5 0 003-1l3 1v1a3 3 0 11-6 0z" />
              <path d="M9 7a1 1 0 100-1 1 1 0 000 1z" />
              <path d="M7 7a1 1 0 100-1 1 1 0 000 1zM8 9a2 2 0 001-1H7v1h1z" />
            </svg>
          </button>
          <button
            className={`${
              !toggleDesigner
                ? `p-4 mr-2 rounded bg-yellow-300`
                : `p-4 mr-2 rounded `
            }`}
            onClick={() => setToggleDesigner(false)}
          >
            <svg
              className={`${
                !toggleDesigner
                  ? `fill-current text-background`
                  : `fill-current text-white`
              }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 14v2h7l1-4 1 4h7v-2a2 2 0 00-1-1 10 10 0 00-5-2v-1a5 5 0 003-4V5A5 5 0 003 5v1a5 5 0 003 4v1c-2 0-4 0-5 2a2 2 0 00-1 1zm5-8V5a5 5 0 003-1l3 1v1a3 3 0 11-6 0z" />
              <path d="M9 7a1 1 0 100-1 1 1 0 000 1z" />
              <path d="M7 7a1 1 0 100-1 1 1 0 000 1zM8 9a2 2 0 001-1H7v1h1z" />
            </svg>
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
            {fullname}
          </h2>
          <h4 className="text-sm font-body text-gray-200 font-light antialiased mb-4">
            {jobtitle}
          </h4>
          <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased mb-4">
            {description}
          </p>
          <a href={linkedin} target="_blank">
            <svg
              className="fill-current text-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.33333 5.66669H1.66666C1.48257 5.66669 1.33333 5.81593 1.33333 6.00002V14.6667C1.33333 14.8508 1.48257 15 1.66666 15H4.33333C4.51742 15 4.66666 14.8508 4.66666 14.6667V6.00002C4.66666 5.81593 4.51742 5.66669 4.33333 5.66669Z" />
              <path d="M2.98666 4.33333C3.89977 4.33333 4.63999 3.58714 4.63999 2.66667C4.63999 1.74619 3.89977 1 2.98666 1C2.07355 1 1.33333 1.74619 1.33333 2.66667C1.33333 3.58714 2.07355 4.33333 2.98666 4.33333Z" />
              <path d="M12.3333 15H14.3333C14.4217 15 14.5065 14.9649 14.569 14.9024C14.6315 14.8399 14.6667 14.7551 14.6667 14.6667V9.06669C14.6667 6.55336 13.2467 5.33336 11.26 5.33336C10.8681 5.31903 10.4776 5.38696 10.1136 5.53279C9.74964 5.67862 9.42024 5.8991 9.14667 6.18002C9.11013 6.22224 9.06154 6.25225 9.00743 6.26603C8.95333 6.2798 8.8963 6.27667 8.84402 6.25707C8.79175 6.23747 8.74673 6.20233 8.71502 6.15637C8.68331 6.11042 8.66644 6.05585 8.66667 6.00002C8.66667 5.91162 8.63155 5.82683 8.56904 5.76432C8.50652 5.70181 8.42174 5.66669 8.33333 5.66669H6.33333C6.24493 5.66669 6.16014 5.70181 6.09763 5.76432C6.03512 5.82683 6 5.91162 6 6.00002V14.6667C6 14.7551 6.03512 14.8399 6.09763 14.9024C6.16014 14.9649 6.24493 15 6.33333 15H8.33333C8.42174 15 8.50652 14.9649 8.56904 14.9024C8.63155 14.8399 8.66667 14.7551 8.66667 14.6667V9.66669C8.66667 9.22466 8.84226 8.80074 9.15482 8.48818C9.46738 8.17562 9.89131 8.00002 10.3333 8.00002C10.7754 8.00002 11.1993 8.17562 11.5118 8.48818C11.8244 8.80074 12 9.22466 12 9.66669V14.6667C12 14.7551 12.0351 14.8399 12.0976 14.9024C12.1601 14.9649 12.2449 15 12.3333 15Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Designers;
