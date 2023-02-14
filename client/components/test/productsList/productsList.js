import React from "react";
import { useState, useRef, useEffect } from "react";
export default function productsList() {
  const [open, setOpen] = useState(false);
  const openCurrent = useRef(open);
  const catMenu = useRef(null);
  useEffect(() => {
    console.log("activated");
    openCurrent.current = open;
  }, [open]);
  const openDropdownHandle = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(`open1 ${openCurrent.current}`);
  };
  const closeOpenMenus = (e) => {
    console.log(`catMenu.current ${catMenu.current}`);
    console.log(`open2 ${openCurrent.current}`);
    console.log(
      `catMenu.current.contains(e.target) ${catMenu.current.contains(e.target)}`
    );

    if (
      catMenu.current &&
      openCurrent.current &&
      !catMenu.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, []);

  return (
    <div ref={catMenu}>
      <div className="flex justify-center">
        <div className="relative inline-block mb-20">
          <button
            onClick={openDropdownHandle}
            className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          >
            <span className="mx-1">Jane Doe</span>
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {open && (
            <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a
                href="#"
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <img
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                  alt="jane avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Jane Doe
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    janedoe@exampl.com
                  </p>
                </div>
              </a>

              <hr className="border-gray-200 dark:border-gray-700 " />

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                view profile
              </a>

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Settings
              </a>

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Keyboard shortcuts
              </a>

              <hr className="border-gray-200 dark:border-gray-700 " />

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Company profile
              </a>

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Team
              </a>

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Invite colleagues
              </a>

              <hr className="border-gray-200 dark:border-gray-700 " />

              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Help
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
