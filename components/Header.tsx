import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex z-20 border-b py-4 px-4 md:px-12 bg-white justify-between sticky top-0 w-full items-center">
      <Link href="/" className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[rgb(132,69,254)]"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-bold  md:text-xl">InspireX</span>
      </Link>
      <nav className="hidden md:flex md:gap-4 lg:gap-10 text-sm font-semibold text-primaryText">
        <Link href="/about" className="hover:text-primary-500">
          About Us
        </Link>
        <Link href="/product" className="hover:text-primary-500">
          Product
        </Link>
        <Link href="/blog" className="hover:text-primary-500">
          Blog
        </Link>
        <Link href="/faqs" className="hover:text-primary-500">
          FAQs
        </Link>
        <Link href="/contact" className="hover:text-primary-500">
          Contact
        </Link>
      </nav>
      <div className="flex gap-4">
        <button className="text-sm font-semibold text-primaryText">
          Sign Up
        </button>
        <Link
          href="/joinWaitlist"
          className="rounded-3xl text-sm font-semibold text-primary-500 border border-primary-600 px-4 py-2 hover:bg-primary-500 hover:text-white duration-300"
        >
          Join the Waitlist
        </Link>
      </div>
    </header>
  );
}

export default Header;
