import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function CallToAction({}: Props) {
  return (
    <section className="bg-white py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <Image
          width={400}
          height={400}
          className="md:rounded-lg object-cover h-96 md:pt-0 md:h-auto rounded-3xl w-full"
          src="/last.jpg.jpg"
          alt="dashboard image"
        />
        <div className="mt-8 md:mt-0">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight leading-none text-primaryText">
            Introducing InspireX: Where your creativity meets boundless
            possibilities.
          </h2>
          <p className="mb-6 text-lg font-normal text-secondaryText">
            Our no-code platform empowers you to transform your ideas into
            reality effortlessly. Build, share, and innovate without boundaries
            unleash your imagination with InspireX.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CallToAction;
