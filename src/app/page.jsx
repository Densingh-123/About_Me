"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <div className="w-full">
            <span className="text-xl md:text-2xl font-normal">
              Frontend Developer
            </span>
            <div className="name">
            <h1 className="text-4xl md:text-6xl font-bold">Hello I&apos;m</h1>
            <h1 className="text-4xl md:text-6xl font-bold">
              {"Densingh"}
            </h1>
            </div>
          </div>
          {/* description */}
          <p className="md:text-xl text-justify">
            a React wizard crafting sleek, lightning-fast web experiences. Dive
            into my work and see what cutting-edge front-end development looks
            like. Ready to build something amazing together? Let&apos;s talk.
          </p>
          <div className="gap-8">
            <Link href="/portfolio" className="">
              <button className="btn">View My Work</button>
            </Link>
            <Link href="/contact" className="p-4 ">
              <button className="btn">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
