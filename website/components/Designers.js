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
    "Ontwerpen is voor mij eigenzinnig, uniek en functioneel. Uw wensen staan hierin centraal, met een persoonlijk en uniek ontwerp als gevolg. Het is een prachtig proces van schets tot eindresultaat, waarbij ik u graag begeleid.",
};

function Designers() {
  const [toggleDesigner, setToggleDesigner] = useState(true);

  const imgHref = toggleDesigner
    ? jochemtepperik.avatar
    : koenklijnvelderman.avatar;

  const designername = toggleDesigner
    ? jochemtepperik.name
    : koenklijnvelderman.name;

  const description = toggleDesigner
    ? jochemtepperik.description
    : koenklijnvelderman.description;

  return (
    <div className="flex flex-row">
      <div className="flex w-1/3 justify-center">
        <img src={imgHref}></img>
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
                : `p-4 mr-2 rounded`
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
            {designername}
          </h2>
          <h4 className="text-sm font-body text-gray-200 font-light antialiased mb-4">
            Bouwkundig ontwerper
          </h4>
          <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Designers;
