import Link from "next/link";

function Header() {
  return (
    <nav
      style={{ maxWidth: "960px", marginRight: "auto", marginLeft: "auto" }}
      className="z-10 bg-background p-4"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <img src="/logo-oostz.svg"></img>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center rounded text-white hover:text-yellow-200">
            <img src="/menubutton.svg"></img>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow lg:flex lg:justify-center">
            <Link href="/">
              <a className="font-body font-light text-white mr-6 leading-8 block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="font-body font-light text-white mr-6 leading-8 block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200">
                Werkwijze
              </a>
            </Link>
            <Link href="/">
              <a className="font-body font-light text-white mr-6 leading-8 block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200">
                Projecten
              </a>
            </Link>
            <Link href="/">
              <a className="font-body font-light text-white leading-8 block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200">
                Contact
              </a>
            </Link>
          </div>
          <div>
            <button className="px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 mt-4 lg:mt-0">
              Maak afspraak
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
