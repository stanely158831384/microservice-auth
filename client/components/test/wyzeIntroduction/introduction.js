import React from "react";
import wyzeLogo from "/public/wyze_logo.png";
import camV3 from "/public/camV3.png";
import Image from "next/image";
import partialBackgroundImage from "/public/bg-wyze-floodlight.jpg";
import screenShot from "/public/wyze_screenshot.jpg";
import screenShot2 from "/public/wyze_screenshot2.jpg";
import screenShot3 from "/public/wyze_screenshot3.jpg";

const styles = {
  introductionBackground: {
    backgroundImage: `url(/bg-wyze-floodlight.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height: "100vh"
  },
  // screenShotBackground: {
  //     backgroundImage: `url(/wyze_screenshot.jpg)`,
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  //     height: "100%",
  //     width: "100%"
  // }
};

export default function () {
  return (
    <div>
      {/* topic decoration */}
      <div className=" lg:flex block m-10  items-center">
        {/* wyze logo */}
        <div className="lg:flex-1 ">
          <Image
            src={wyzeLogo}
            alt="wyzeLogo"
            width={256}
            height={60}
            layout="responsive"
            className=""
          />
        </div>
        {/* introduction */}
        <div className="bg-green-200 w-full h-full lg:flex-1 scale-90 shadow-lg">
          <div className="">
            <Image
              src={camV3}
              alt="camV3"
              width={150}
              height={150}
              layout="responsive"
              className=""
            ></Image>
          </div>
        </div>
      </div>

      {/* topic */}
      <div
        className="flex relative flex-col rounded-3xl m-10 shadow-xl min-h-fit	"
        style={styles.introductionBackground}
      >
        <p className=" relative flex  mx-auto  mt-10 sm:text-8xl text-2xl w-fit text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-500 text-shadow-color font-cyberFonts">
          Introduction
        </p>
        {/* Description frame*/}
        <div className="flex sm:flex-row-reverse flex-col m-5">
          {/* what is wyze */}
          <div className="flex-col rounded-3xl sm:w-1/3 w-full infos-2 shadow-xl">
            <h3 className="mx-auto text-center  mt-5">Why is Wyze ?</h3>
            <p className="m-5">
              Wyze is an smart home company, who provides various of products
              like Smart cameras, thermal monitors, smart lighting equipments,
              and etc.{" "}
            </p>
            <p className="m-5">
              The reason why we use Wyze is because their products are really
              good performance and affordable comparing other candidates, like
              google and amazon
            </p>
            <p className="m-5">
              " Wyze offers smart home cameras and devices packed with features
              at a price that is accessible for all "
            </p>
            <p className="m-5 text-right">Quoted from wyze official</p>
          </div>
        </div>
        {/* <div className="absolute w-min" style={styles.screenShotBackground}>

                </div> */}

        <div className="sm:absolute sm:left-5 bottom-0 xl:w-36 shadow-2xl hidden sm:block">
          <Image
            src={screenShot3}
            width={112}
            height={243}
            layout="responsive"
            className="rounded-lg z50"
          />
        </div>
        <div className="sm:absolute sm:left-32 bottom-0 xl:w-36 shadow-2xl hidden sm:block">
          <Image
            src={screenShot2}
            width={112}
            height={243}
            layout="responsive"
            className="rounded-lg z-10"
          />
        </div>
        <div className="sm:absolute sm:left-64 bottom-0 xl:w-36 shadow-2xl hidden sm:block">
          <Image
            src={screenShot}
            width={112}
            height={243}
            layout="responsive"
            className="rounded-lg z-10"
          />
        </div>
      </div>

      <style>
        {`      .infos-2 {
        background: hsla(0, 0%, 100%, .3);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }`}
      </style>
    </div>
  );
}
