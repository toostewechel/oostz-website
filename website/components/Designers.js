import React, { useState } from "react";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const jochemtepperik = {
  avatar: "/images/home/jochem-avatar.png",
  photo: "/images/home/jochem.png",
  name: "Jochem Tepperik",
  linkedin: "https://www.linkedin.com/in/jochem-tepperik-b0bbba141/",
  email: "jochem@oostz-ontwerp.nl",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "Ik maak graag samen met u de vertaling van een esthetisch ontwerp naar een technisch ontwerp dat geheel aansluit op uw wensen en ideeën. Ik vind het fantastisch om hierin als creatieve schakel te fungeren en uw droom om te zetten in een tastbaar resultaat.",
};

const koenklijnvelderman = {
  avatar: "/images/home/koen-avatar.png",
  photo: "/images/home/koen.png",
  name: "Koen Klijn Velderman",
  linkedin: "https://www.linkedin.com/in/koen-klijn-velderman-8b59357a/",
  email: "koen@oostz-ontwerp.nl",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "'Make it simple, but significant.' Ontwerpen is voor mij eigenzinnig, uniek en functioneel. Uw wensen staan hierin centraal, met een persoonlijk en uniek ontwerp als gevolg. Het is een prachtig proces van schets tot eindresultaat, waarbij ik u graag begeleid.",
};

function Designers() {
  const [toggleDesigner, setToggleDesigner] = useState(true);

  const avatar = toggleDesigner
    ? jochemtepperik.photo
    : koenklijnvelderman.photo;

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

  const email = toggleDesigner
    ? jochemtepperik.email
    : koenklijnvelderman.email;

  return (
    <div className="flex flex-row">
      <div className="hidden md:flex md:w-1/3 md:justify-center mr-4">
        <img src={avatar}></img>
      </div>
      <div className="flex flex-col w-full md:w-2/3 justify-center">
        <div className="inline-flex mb-6">
          <button
            className={`${
              toggleDesigner
                ? `h-12 w-12 mr-3 rounded bg-yellow-100`
                : `h-12 w-12 mr-3 rounded`
            }`}
            onClick={() => setToggleDesigner(true)}
          >
            <img src={jochemtepperik.avatar}></img>
          </button>
          <button
            className={`${
              !toggleDesigner
                ? `h-12 w-12 mr-3 rounded bg-yellow-100`
                : `h-12 w-12 mr-3 rounded`
            }`}
            onClick={() => setToggleDesigner(false)}
          >
            <img src={koenklijnvelderman.avatar}></img>
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
            {fullname}
          </h2>
          <h4 className="text-sm font-body text-gray-200 font-light antialiased mb-4">
            {jobtitle}
          </h4>
          <p className="text-base font-body text-gray-200 font-normal antialiased mb-4">
            {description}
          </p>
          <div className="flex flex-row items-center">
            <a href={linkedin} target="_blank">
              <svg
                className="fill-current text-white mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.333 9.667H5.667a.333.333 0 00-.334.333v8.667c0 .184.15.333.334.333h2.666c.184 0 .334-.15.334-.333V10a.333.333 0 00-.334-.333zM6.987 8.333A1.66 1.66 0 008.64 6.667C8.64 5.747 7.9 5 6.987 5a1.66 1.66 0 00-1.654 1.667c0 .92.74 1.666 1.654 1.666zM16.333 19h2a.333.333 0 00.334-.333v-5.6c0-2.514-1.42-3.734-3.407-3.734a2.807 2.807 0 00-2.113.847.274.274 0 01-.48-.18.333.333 0 00-.334-.333h-2A.333.333 0 0010 10v8.667a.334.334 0 00.333.333h2a.333.333 0 00.334-.333v-5a1.667 1.667 0 013.333 0v5a.334.334 0 00.333.333z" />
              </svg>
            </a>
            <a href={`mailto:${email}`} target="_blank">
              <svg
                className="fill-current text-white mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.9253 8.88808C19.9031 8.87861 19.8784 8.87603 19.8547 8.88067C19.8309 8.8853 19.8091 8.89694 19.792 8.91408L13.294 15.4107C12.9502 15.7543 12.4841 15.9474 11.998 15.9474C11.5119 15.9474 11.0458 15.7543 10.702 15.4107L4.20667 8.91408C4.18967 8.89678 4.16784 8.88503 4.14403 8.88039C4.12023 8.87575 4.09558 8.87843 4.07333 8.88808C4.05147 8.89749 4.03286 8.91313 4.01982 8.93305C4.00678 8.95296 3.99989 8.97627 4 9.00008V17.0001C4 17.3537 4.14048 17.6928 4.39053 17.9429C4.64057 18.1929 4.97971 18.3334 5.33333 18.3334H18.6667C19.0203 18.3334 19.3594 18.1929 19.6095 17.9429C19.8595 17.6928 20 17.3537 20 17.0001V9.00008C20.0001 8.9761 19.993 8.95264 19.9797 8.9327C19.9664 8.91275 19.9475 8.89721 19.9253 8.88808V8.88808Z" />
                <path d="M11.41 14.7041C11.5665 14.8601 11.7784 14.9477 11.9993 14.9477C12.2203 14.9477 12.4322 14.8601 12.5887 14.7041L19.046 8.24675C19.0897 8.20303 19.1204 8.14802 19.1347 8.08786C19.1489 8.0277 19.1461 7.96476 19.1267 7.90608C19.0533 7.68675 18.8493 7.66675 18.6667 7.66675H5.33333C5.15 7.66675 4.94466 7.68675 4.87266 7.90608C4.8532 7.96476 4.85043 8.0277 4.86467 8.08786C4.87892 8.14802 4.90962 8.20303 4.95333 8.24675L11.41 14.7041Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designers;
