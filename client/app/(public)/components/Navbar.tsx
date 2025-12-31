"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="//border-b fixed top-0 left-0 z-50 h-28 w-full border-t-4 border-t-[#CEA72B] border-b-[#CEA72B] bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2 font-[Tinos] text-xl text-[#24439C]"
          onClick={() => router.push("/")}
        >
          <Image src="/msllogo1.png" alt="MSL Logo" height={90} width={90} />
          <p>MaritimeSolutionsLtd</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden h-full flex-col items-end justify-between md:flex">
          {/* Top Buttons */}
          <ul className="mb-1 flex items-center gap-px border-t border-white text-xs font-medium text-white">
            <li className="cursor-pointer rounded-bl-md bg-[#CEA72B] px-2 py-1 hover:bg-[#24439C]">
              Upload CV
            </li>
            <li className="cursor-pointer bg-[#CEA72B] px-4 py-1 hover:bg-[#24439C]">
              <button onClick={() => router.push("/")}>
                Register a vacancy
              </button>
            </li>
            <li className="cursor-pointer rounded-br-md bg-[#CEA72B] px-4 py-1 hover:bg-[#24439C]">
              <button onClick={() => router.push("/login")}>Login</button>
            </li>
          </ul>

          {/* Bottom Nav + Search */}
          <div className="mt-4 mb-auto flex items-center gap-8">
            <ul className="hidden items-center gap-8 font-medium text-[#24439C] md:flex">
              <li>
                <a
                  href="#"
                  className="hover:text-[#CEA72B]"
                  onClick={() => router.push(`/`)}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Employers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Sectors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CEA72B]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none md:hidden"
        >
          <svg
            className="h-7 w-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`${
          open ? "block" : "hidden"
        } border-t border-gray-200 bg-white px-6 pb-4 shadow-sm md:hidden`}
        id="mobileMenu"
      >
        <ul className="flex flex-col gap-3 py-2 font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block rounded-lg px-2 py-2 transition hover:bg-gray-100 hover:text-blue-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
