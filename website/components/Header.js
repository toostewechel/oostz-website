import { useRouter } from "next/router";
import { useMediaQuery } from "beautiful-react-hooks";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function ActiveLink({ label, href }) {
  const router = useRouter();
  const style = {
    fontWeight: router.pathname === href ? "500" : "300",
    borderBottom: router.pathname === href ? "2px solid #FFCF5C" : "0",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href).then(() =>
      window.scrollTo({
        top: "0",
      })
    );
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={style}
      className="font-body font-light text-white leading-8 block mr-0 mt-4 lg:inline-block lg:mt-0 lg:mr-6 hover:text-gray-200"
    >
      {label}
    </a>
  );
}

function Header() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    showMenu && (document.body.style.overflow = "hidden");
    !showMenu && (document.body.style.overflow = "unset");
  });

  return (
    <header className="fixed top-0 right-0 left-0 z-10 w-full bg-background py-3 px-6">
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <a href="/">
            <img src="/logo-oostz.svg"></img>
          </a>
        </div>
        {isLaptop ? (
          <div
            id="nav-content"
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="flex-grow flex justify-end">
              <ActiveLink label="Home" href="/" />
              <ActiveLink label="Werkwijze" href="/werkwijze" />
              <ActiveLink label="Projecten" href="/projecten" />
              <ActiveLink label="Contact" href="/contact" />
            </div>
            <div>
              <button className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 ">
                <a href="/contact">Maak afspraak</a>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <img src="/MenuClose.svg"></img>
              ) : (
                <img src="/menubutton.svg"></img>
              )}
            </button>
          </div>
        )}
      </div>
      {showMenu && (
        <div className="w-full p-4 h-screen block flex-grow lg:items-center lg:w-auto lg:hidden">
          <div className="lg:flex-grow lg:flex lg:justify-center ">
            <ActiveLink label="Home" href="/" />
            <ActiveLink label="Werkwijze" href="/werkwijze" />
            <ActiveLink label="Projecten" href="/projecten/mulder" />
            <ActiveLink label="Contact" href="/contact" />
          </div>
          <div>
            <button className="px-3 py-2 w-full bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 mt-6 lg:mt-0">
              <a href="/contact">Maak afspraak</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
