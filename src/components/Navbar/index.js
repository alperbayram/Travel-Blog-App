import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Home2", href: "/home2", current: false },
  { name: "Single Page", href: "/SinglePage", current: false },
  { name: "Single Page2", href: "/SinglePage2", current: false },
];

const Pn = "./img/social/pinterest.png";
const tw = "./img/social/twitter.png";
const fb = "./img/social/facebook.png";
const Be = "./img/social/behance.png";
const yo = "./img/social/youtube.png";
const search = "./img/social/Search.png";

const runo = "./img/RUNO.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-background-color2">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-5 w-auto"
                    src={runo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-5 w-auto"
                    src={runo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white "
                            : "text-white hover:underline underline-offset-8 decoration-nav-underline hover:text-white",
                          "px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <span className="border-l border-white h-5 flex self-center"></span>
                    <div className="flex items-center px-3 py-2 ">
                      <a href="#!" className="text-gray-200 ">
                        <span className="mr-4 flex items-center ">
                          {" "}
                          <img src={fb} alt="avatar" className="w-5 h-5" />
                        </span>
                      </a>
                      <a href="#!" className="text-gray-200">
                        <span className="mr-4 flex items-center ">
                          {" "}
                          <img src={tw} alt="avatar" className="w-5 h-5" />
                        </span>
                      </a>
                      <a href="#!" className="text-gray-200">
                        <span className="mr-4 flex items-center ">
                          {" "}
                          <img src={yo} alt="avatar" className="w-5 h-5" />
                        </span>
                      </a>
                      <a href="#!" className="text-gray-200">
                        <span className="mr-4 flex items-center ">
                          {" "}
                          <img src={Pn} alt="avatar" className="w-5 h-5" />
                        </span>
                      </a>
                      <a href="#!" className="text-gray-200">
                        <span className="flex items-center ">
                          {" "}
                          <img src={Be} alt="avatar" className="w-5 h-5" />
                        </span>
                      </a>
                    </div>
                    <span className="border-l border-white h-5 flex self-center"></span>
                    <div className="flex items-center px-3 py-2 ">
                      <a href="#!" className="text-gray-200 ">
                        <span className=" flex items-center ">
                          {" "}
                          <img src={search} alt="search" className="w-5 h-5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-white hover:underline underline-offset-8 decoration-nav-underline hover:text-white",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex items-center px-3 py-2 ">
                <a href="#!" className="text-gray-200 ">
                  <span className="mr-2 flex items-center ">
                    {" "}
                    <img src={fb} alt="social" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#!" className="text-gray-200">
                  <span className="mr-2 flex items-center ">
                    {" "}
                    <img src={tw} alt="social" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#!" className="text-gray-200">
                  <span className="mr-2 flex items-center ">
                    {" "}
                    <img src={yo} alt="social" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#!" className="text-gray-200">
                  <span className="mr-2 flex items-center ">
                    {" "}
                    <img src={Pn} alt="social" className="w-5 h-5" />
                  </span>
                </a>
                <a href="#!" className="text-gray-200">
                  <span className="mr-2 flex items-center ">
                    {" "}
                    <img src={Be} alt="social" className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
