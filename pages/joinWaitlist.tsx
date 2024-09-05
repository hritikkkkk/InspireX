"use client";

import CallToAction from "@/components/CallToAction";
import EmailWaitlist from "@/components/EmailWaitlist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import SocialProof from "@/components/SocialProof";
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function JoinWaitlist({}: Props) {
  const waitlistRef = useRef<HTMLDivElement | null>(null);

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      const yOffset = -60;
      const yPosition =
        waitlistRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <CallToAction scrollToWaitlist={scrollToWaitlist} /> <SocialProof />
      <div ref={waitlistRef}>
        <EmailWaitlist />
      </div>
      <NewsLetter />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default JoinWaitlist;
