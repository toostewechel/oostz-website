import React, { useState, useEffect } from "react";

function ProjectHeader() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (window.scrollY !== 0) {
      setIsTop(false);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsTop]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-10 w-full p-2 transition duration-300 pointer-events-none ${
        !isTop ? "bg-background md:bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between pointer-events-auto">
        <div>
          <a href="/">
            <img src="/logo-oostz.svg"></img>
          </a>
        </div>
        <div>
          <a href="/">
            <img src="/MenuClose.svg"></img>
          </a>
        </div>
      </div>
    </header>
  );
}

export default ProjectHeader;
