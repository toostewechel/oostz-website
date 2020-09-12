import React, { useState } from "react";

function ThumbnailImage(props) {
  const [toggleHover, setToggleHover] = useState(false);

  const style = {
    filter: toggleHover ? "grayscale(100%)" : "grayscale(0%)",
    borderRadius: "4px",
    // backgroundImage: `url(${props.src})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
  };

  return (
    <a href={props.href}>
      <div
        className="relative rounded"
        onMouseEnter={() => setToggleHover(!toggleHover)}
        onMouseLeave={() => setToggleHover(!toggleHover)}
      >
        <div className="relative ">
          <img style={style} src={props.src} className="h-full w-full"></img>
          {toggleHover && (
            <div className="absolute top-0 right-0">
              <div
                className="flex flex-row items-center m-1 px-2 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded"
                onClick={props.href}
              >
                <p className="text-heading text-sm font-body font-medium ">
                  {props.title}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="border-l-4 border-yellow-500">
          <p className="ml-3 mt-3 text-sm font-body text-gray-200 font-normal antialiased">
            {props.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ThumbnailImage;
