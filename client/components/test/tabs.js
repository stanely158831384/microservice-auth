import React from "react";
import Image from "next/image";
import WebsiteTab from "../../public/website-design-tab.gif";
import SecurityTab from "../../public/security-tab.svg";
import ForumTab from "../../public/forum-tab.gif";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="relative container mx-auto max-h-fit">
        <div className="bg-hero-l"></div>
        <div className="flex flex-wrap ">
          <div className="w-full xl:mx-8 mx-auto my-6 mb-16 mt-12 px-6 ">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-3xl font-cyberFonts font-bold uppercase px-5 py-3 rounded block leading-normal text-black" +
                    (openTab === 1
                      ? " border-b-4 border-red-500"
                      : " ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-3xl font-cyberFonts font-bold uppercase px-5 py-3 rounded block leading-normal text-black" +
                    (openTab === 2
                      ? " border-b-4 border-red-500"
                      : " ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Settings
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-3xl font-cyberFonts font-bold uppercase px-5 py-3 rounded block leading-normal text-black" +
                    (openTab === 3
                      ? " border-b-4 border-red-500"
                      : " ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Options
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="px-4 py-5 flex-auto bg-slate-200">
                <div className="tab-content tab-space">
                  <div className={(openTab === 1 ? "block" : "hidden") + " flex sm:flex-row flex-col"} id="link1">
                    <div className="flex justify-center md:w-1/2">
                      <Image src={WebsiteTab} alt="" className='absolute z-10 ' />
                    </div>

                    <div className="flex flex-col space-y-8 md:w-1/2">
                      <h3
                        className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"
                      >
                        Bookmark in one click
                      </h3>
                      <p className="max-w-md text-center text-grayishBlue md:text-left">
                        Organize your bookmarks however you like. Our simple
                        drag-and-drop interface gives you complete control over how you
                        manage your favourite sites.
                      </p>
                      <div className="mx-auto md:mx-0">
                        <a
                          href="#"
                          className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                        >More Info</a
                        >
                      </div>
                    </div>
                  </div>
                  <div className={(openTab === 2 ? "block" : "hidden") + " flex sm:flex-row flex-col"} id="link2">
                    <div className=" flex justify-center md:w-1/2">
                      <Image src={SecurityTab} alt="dsfg" className="absolute z-10" />
                    </div>

                    <div className="flex flex-col space-y-8 md:w-1/2">
                      <h3
                        className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"
                      >
                        Bookmark in one click
                      </h3>
                      <p className="max-w-md text-center text-grayishBlue md:text-left">
                        Organize your bookmarks however you like. Our simple
                        drag-and-drop interface gives you complete control over how you
                        manage your favourite sites.
                      </p>
                      <div className="mx-auto md:mx-0">
                        <a
                          href="#"
                          className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                        >More Info</a>
                      </div>
                    </div>
                  </div>
                  <div className={(openTab === 3 ? "block" : "hidden") + " flex sm:flex-row flex-col"} id="link3">
                    <div className="flex justify-center md:w-1/2">
                      <Image src={ForumTab} alt="" className='absolute z-10' />
                    </div>

                    <div className="flex flex-col space-y-8 md:w-1/2">
                      <h3
                        className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"
                      >
                        Bookmark in one click
                      </h3>
                      <p className="max-w-md text-center text-grayishBlue md:text-left">
                        Organize your bookmarks however you like. Our simple
                        drag-and-drop interface gives you complete control over how you
                        manage your favourite sites.
                      </p>
                      <div className="mx-auto md:mx-0">
                        <a
                          href="#"
                          className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                        >More Info</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />
    </>
  );
}