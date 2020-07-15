import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "beautiful-react-hooks";
import React, { useState } from "react";

function ActiveLink({ label, href }) {
  const router = useRouter();
  const style = {
    fontWeight: router.pathname === href ? "500" : "300",
    borderBottom: router.pathname === href ? "2px solid #FFCF5C" : "0",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
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

  return (
    <nav
      style={{ maxWidth: "960px", marginRight: "auto", marginLeft: "auto" }}
      className="bg-background p-4"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <Link href="/">
            <a>
              <img src="/logo-oostz.svg"></img>
            </a>
          </Link>
        </div>
        {isLaptop ? (
          <div
            id="nav-content"
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="flex-grow flex justify-center">
              <ActiveLink label="Home" href="/"></ActiveLink>
              <ActiveLink label="Werkwijze" href="/werkwijze"></ActiveLink>
              <ActiveLink label="Projecten" href="/projecten"></ActiveLink>
              <ActiveLink label="Contact" href="/contact"></ActiveLink>
            </div>
            <div>
              <button className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 ">
                Maak afspraak
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <button onClick={() => setShowMenu(!showMenu)}>
              <img src="/menubutton.svg"></img>
            </button>
          </div>
        )}
      </div>
      {showMenu && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:hidden">
          <div className="lg:flex-grow lg:flex lg:justify-center">
            <ActiveLink label="Home" href="/"></ActiveLink>
            <ActiveLink label="Werkwijze" href="/werkwijze"></ActiveLink>
            <ActiveLink label="Projecten" href="/projecten"></ActiveLink>
            <ActiveLink label="Contact" href="/contact"></ActiveLink>
          </div>
          <div>
            <button className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 mt-4 lg:mt-0">
              Maak afspraak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
