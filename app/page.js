"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-5 mb-5 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              patrick rooney
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  About me
                </a>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-1">
            <h2 className="text-5xl py-1 text-teal-600 font-medium md:text-6xl">
              Patrick Rooney
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Wed Developer and Software Engineer
            </h3>

            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-5 mx-auto overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" />
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <AiFillYoutube />
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Software engineer with a storyteller background. I see endless
              possibilities in code.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 text-gray-800 dark:text-white">
              I'm a Brooklyn based Full Stack Software Engineer with a passion
              for creating and storytelling. Recently, I graduated from{" "}
              <span className="text-red-400">
                Fullstack Academy's Software Engineering Immersive via the
                Future Code Program.
              </span>{" "}
              I have become proficient with Javascript, Node, Express, React,
              React Native, React-Redux, Firebase, SQL, and Sequelize. My
              background includes a decade of experience in the acting industry
              and have been heavily featured on Television, Film, and Stage.
              Through this, I have developed the ability to process information
              quickly, operate in high pressure environments, manage time
              efficiently, and tell engaging stories. I've loved every moment of
              my acting career and am eagerly looking forward to transferring my
              skills to the tech industry. I believe my combined artistic and
              technical talents make me a unique candidate that can contribute
              in a myriad of manners.
            </p>
          </div>
          <div className="lg:flex gap-10  dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-600">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs according to your needs
              </p>
              <h4 className="py-4 text-teal-600 dark:text-gray-900">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-600">
              <Image src={code} width={100} height={100} className="mx-auto" />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs according to your needs
              </p>
              <h4 className="py-4 text-teal-600 dark:text-gray-900">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-600">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />

              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs according to your needs
              </p>
              <h4 className="py-4 text-teal-600 dark:text-gray-900">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 text-gray-800 dark:text-white">
              I'm a Brooklyn based Full Stack Software Engineer with a passion
              for creating and storytelling. Recently, I graduated from{" "}
              <span className="text-red-400">
                Fullstack Academy's Software Engineering Immersive via the
                Future Code Program.
              </span>{" "}
              I have become proficient with Javascript, Node, Express, React,
              React Native, React-Redux, Firebase, SQL, and Sequelize. My
              background includes a decade of experience in the acting industry
              and have been heavily featured on Television, Film, and Stage.
              Through this, I have developed the ability to process information
              quickly, operate in high pressure environments, manage time
              efficiently, and tell engaging stories. I've loved every moment of
              my acting career and am eagerly looking forward to transferring my
              skills to the tech industry. I believe my combined artistic and
              technical talents make me a unique candidate that can contribute
              in a myriad of manners.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />{" "}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
