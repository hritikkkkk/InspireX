import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Features({}: Props) {
  return (
    <section className="bg-primaryText py-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-screen-md mb-8 lg:mb-16"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            Tailored for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            We continuously enhance our product to help you focus on what
            matters most. Discover the latest features and updates.
          </p>
        </motion.div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl lg:h-12 lg:w-12 bg-[#4F46E5]">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Marketing</h3>
            <p className="text-gray-400">
              Strategize, create, and launch effortlessly. Collaborate
              seamlessly to achieve your marketing objectives with our
              comprehensive tools.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl lg:h-12 lg:w-12 bg-[#4F46E5]">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Legal</h3>
            <p className="text-gray-400">
              Ensure compliance and safeguard your organization with our
              tailored workflows and custom permissions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl lg:h-12 lg:w-12 bg-[#4F46E5]">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Business Automation
            </h3>
            <p className="text-gray-400">
              Streamline operations with automated task assignments, Slack
              notifications, and a range of templates to get you started.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl lg:h-12 lg:w-12 bg-[#4F46E5]">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h14a2 2 0 110 4H4a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Collaboration
            </h3>
            <p className="text-gray-400">
              Enhance team collaboration with shared workspaces, comment
              threads, and real-time updates for smooth teamwork.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl lg:h-12 lg:w-12 bg-[#4F46E5]">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a1 1 0 00-1 1v.41l-4.707 4.707a1 1 0 00-.293.707V14a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-.293-.707L11 2.41V2a1 1 0 00-1-1zm0 2.41L11.293 6H9.707L10 3.41zM4 8.707l4-4V9a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-.293-.707L12 3.41V7a1 1 0 001 1h2v6H4V8.707z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Security</h3>
            <p className="text-gray-400">
              Protect sensitive information with our robust security features,
              including encryption, access controls, and regular audits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;
