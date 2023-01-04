import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <Popover className="relative bg-white">
        <div className="">
          <div className="flex items-center justify-between border-b border-technicablePrimary py-4 mb-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt="technible"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                to="/"
                className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
              >
                Home
              </Link>
              <Link
                to="/reading-history"
                className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
              >
                Reading history
              </Link>
              <Link
                to="/"
                className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
              >
                Docs
              </Link>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                to="/dashboard"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-technicablePrimary text-technicableWhite font-bold px-4 py-2 text-base text-white shadow-sm hover:bg-indigo-700"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden bg-technicableWhite text-technicableSecondary"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="technible" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <HiXMark className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols- gap-y-4 gap-x-8">
                  <Link
                    to="/"
                    className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
                  >
                    Home
                  </Link>
                  <Link
                    to="/reading-history"
                    className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
                  >
                    Reading history
                  </Link>
                  <Link
                    to="/"
                    className="text-base font-bold text-technicableSecondary hover:text-technicableTeriary"
                  >
                    Docs
                  </Link>
                </div>
                <div>
                  <a
                    href="/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
