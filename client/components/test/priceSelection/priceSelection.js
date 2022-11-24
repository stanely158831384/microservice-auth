import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atom/modalAtom";

export default function () {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center font-cyberFonts text-5xl text-transparent bg-gradient-to-b from-green-500 to-blue-500  bg-clip-text">
          Package Details
        </h1>

        <div className="flex items-center justify-center max-h-max m-10">
          <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
            <div className="flex flex-col bg-racoonBlueA rounded-xl text-white">
              <div className="flex flex-col p-8 mx-3 mt-3 rounded-t-xl bg-racoonBlueB">
                <div className="text-center uppercase">Basic</div>
                <h2 className="mt-10 font-serif text-5xl text-center">
                  Smart floodlights * 2
                </h2>
                <h2 className="mt-2 text-center">$440 total</h2>
                <div className="flex justify-center">
                  <a
                    href="#"
                    // className="inline-block px-10 py-3 my-6 text-center border border-cyan-500 rounded-lg duration-200 hover:bg-cyan-500 hover:border-cyan-500"
                    className="font-cyberFonts px-8 py-2 my-4 text-white bg-pink-300 border-b-4 border-b-pink-500 rounded-lg shadow-md hover:bg-pink-500 hover:border-t-6 hover:hover:border-b-0 transition-all duration-100 block"
                    onClick={() => setOpen(true)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col border-t border-racoonBlueA"></div>

              <div className="flex flex-col p-8 mx-3 mb-3 rounded-b-xl bg-racoonBlueB">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-center">
                    <span className="text-sm ml-1">Includes: </span>
                  </div>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">
                      1080p event or continuous recording
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">colorful night vision</span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">
                      32GB local storage, up to 3.5 days of video back-up
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">
                      low temp and waterproof (ip65 waterproof and outdoor-ready
                      (-5 F to 133 F))
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">
                      more dangers detection features (extra cost may apply)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-racoonBlueA rounded-xl text-white">
              <div className="flex flex-col p-8 mx-3 mt-3 rounded-t-xl bg-racoonBlueB">
                <div className="text-center uppercase">Advanced</div>
                <h2 className="mt-10 font-serif text-5xl text-center">
                  Basic + 2 extra cameras
                </h2>
                <h2 className="mt-2 text-center">$660 total</h2>
                <div className="flex justify-center">
                  <a
                    href="#"
                    // className="inline-block px-10 py-3 my-6 text-center border border-cyan-500 rounded-lg duration-200 hover:bg-cyan-500 hover:border-cyan-500"
                    className="font-cyberFonts px-8 py-2 my-4 text-white bg-pink-300 border-b-4 border-b-pink-500 rounded-lg shadow-md hover:bg-pink-500 hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
                    onClick={() => setOpen(true)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col border-t border-racoonBlueA"></div>

              <div className="flex flex-col flex-1 p-8 mx-3 mb-3 rounded-b-xl bg-racoonBlueB">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-center">
                    <span className="text-sm ml-1">Includes: </span>
                  </div>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">All basic features</span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">2 extra cameras</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-racoonBlueA rounded-xl text-white">
              <div className="flex flex-col p-8 mx-3 mt-3 rounded-t-xl bg-racoonBlueB">
                <div className="text-center uppercase">Premium</div>
                <h2 className="mt-10 font-serif text-5xl text-center">
                  Advanced + doorbell
                </h2>
                <h2 className="mt-2 text-center">$810 total</h2>
                <div className="flex justify-center">
                  <a
                    href="#"
                    // className="inline-block px-10 py-3 my-6 text-center border border-cyan-500 rounded-lg duration-200 hover:bg-cyan-500 hover:border-cyan-500"
                    className="font-cyberFonts px-8 py-2 my-4 text-white bg-pink-300 border-b-4 border-b-pink-500 rounded-lg shadow-md hover:bg-pink-500 hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
                    onClick={() => setOpen(true)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col border-t border-racoonBlueA"></div>

              <div className="flex flex-col flex-1 p-8 mx-3 mb-3 rounded-b-xl bg-racoonBlueB ">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-center">
                    <span className="text-sm ml-1">Includes: </span>
                  </div>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">All advanced features</span>
                  </div>

                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-1">
                      Received a call on your phone when a visitor clicks the
                      doorbell multiple times
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
