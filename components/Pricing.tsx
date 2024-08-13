import React from "react";
import TickIcon from "./TickIcon";
import { motion } from "framer-motion";

type Props = {};

function Pricing({}: Props) {
  function liClassNames() {
    return "flex items-center space-x-3";
  }
  return (
    <section className="bg-white py-20" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl font-bold text-primaryText">
            Choose Your Plan and Get Started Today
          </h2>
          <p className="mb-5 text-secondaryText sm:text-xl">
            Enjoy a 14-day unlimited free trial with no contract or credit card
            required.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
          {/* Pricing Card: Individuals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.4 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-primaryText bg-white rounded-xl border border-gray-100 shadow xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-bold">Individuals</h3>
            <p className="font-light text-gray-500 sm:text-base">
              Ideal for personal use or solo projects.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  <span className="font-semibold">10,000</span> visitors
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Get Started
            </a>
          </motion.div>
          {/* Pricing Card: Organizations */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="flex flex-col relative p-6 mx-auto max-w-lg text-center overflow-hidden text-white bg-primaryText rounded-xl border border-gray-100 shadow xl:p-8"
          >
            <h3 className="absolute top-0 left-0 w-full py-4 bg-primary-600 text-white font-bold text-sm uppercase">
              Most Popular
            </h3>
            <h3 className="mb-4 mt-10 text-2xl font-bold">Organizations</h3>
            <p className="font-light text-gray-400 sm:text-base">
              Designed for multiple users with extended and premium support.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>Individual configuration</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
            >
              Get Started
            </a>
          </motion.div>
          {/* Pricing Card: Enterprise */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.4 }}
            viewport={{ once: true }}
            className="flex flex-col p-6 mx-auto max-w-lg text-center text-primaryText bg-white rounded-xl border border-gray-100 shadow xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-bold">Enterprise</h3>
            <p className="font-light text-gray-500 sm:text-base">
              Ideal for large-scale use with extended redistribution rights.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Custom</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className={liClassNames()}>
                <TickIcon />
                <span>Individual configuration</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>No setup or hidden fees</span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Team size:{" "}
                  <span className="font-semibold">100+ developers</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
              </li>
              <li className={liClassNames()}>
                <TickIcon />
                <span>
                  Free updates: <span className="font-semibold">36 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#pricing"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
