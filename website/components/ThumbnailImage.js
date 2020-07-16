import React, { useState } from "react";

function ThumbnailImage(props) {
  const [toggleHover, setToggleHover] = useState(false);

  const style = {
    filter: toggleHover ? "grayscale(100%)" : "grayscale(0%)",
  };

  return (
    <a href={props.href}>
      <div
        className="relative rounded m-2 "
        onMouseEnter={() => setToggleHover(!toggleHover)}
        onMouseLeave={() => setToggleHover(!toggleHover)}
      >
        <div className="absolute border border-gray-200 -mt-2 -mr-2 mb-8 ml-3 top-0 right-0 bottom-0 left-0 rounded"></div>
        <div className="relative ">
          <img style={style} src={props.src} alt={props.alt}></img>;
        </div>
        {toggleHover && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-2">
            <button
              className="flex flex-row items-center px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300"
              onClick={props.href}
            >
              Bekijk project
              <svg
                className="ml-2 fill-current text-background"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8l-3-4h-1l-1 1v2H1 0a1 1 0 000 2h11v2l1 1a1 1 0 001 0l3-4z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </a>
  );
}

export default ThumbnailImage;
