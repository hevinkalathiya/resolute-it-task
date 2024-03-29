import React from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Tour",
    href: "#",
  },
  {
    name: "Products",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Restrotrail",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white border-b p-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between md:justify-evenly px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 ">
          <img
            src="https://re-pos.in/wp-content/uploads/2019/10/re-pos_logo.png"
            alt=""
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden md:block">
          <ul className="inline-flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button
              type="button"
              className="w-full  rounded-md bg-gradient-to-br from-blue-900 via-teal-500 to-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book A Demo
            </button>
          </ul>
        </div>
        <div className="md:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src="https://re-pos.in/wp-content/uploads/2019/10/re-pos_logo.png"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full  rounded-md bg-gradient-to-tr from-blue-900 via-teal-500 to-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book A Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
