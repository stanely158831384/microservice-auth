import React from "react";
import Link from "next/link";

const searchBar = () => {
  return (
    <div>
      <div className=" bg-cyan-200">
        <div className="flex justify-center">{title()}</div>
        <div className="flex justify-center">{searchBarComponent()}</div>
        <div className="flex justify-center">{toolBar()}</div>
      </div>
    </div>
  );
};

const searchBarComponent = () => {
  return (
    <div className="w-1/2 my-6">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

const title = () => {
  return (
    <div className="w-1/2 my-6 ">
      <h1 className="text-center text-cyan-500 text-2xl text-font font-cyberFonts">
        Alpha Forum
      </h1>
      <h2 className="text-center text-cyan-500 text-font font-cyberFonts mt-6">
        The forum itself is a experiment.
      </h2>
    </div>
  );
};

const toolBar = () => {
  return (
    <div>
      <Link href="/forum/createPost">
        <a
          href="#"
          className="font-cyberFonts px-8 py-2 my-4 text-white bg-racoonBlueA border-b-4 border-b-racoonBlueB rounded-lg shadow-md hover:bg-racoonBlueB hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
        >
          Post new
        </a>
      </Link>
    </div>
  );
};

export default searchBar;
