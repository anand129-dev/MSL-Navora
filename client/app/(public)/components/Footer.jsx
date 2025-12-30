import React from "react";

export default function Footer() {
  return (
    <footer className="">
      <div className="h-2 bg-[#D5A63B]"></div>
      <div className="bg-[#1F3C8B] pt-12 pb-6 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
          {/* Logo + Address */}
          <div>
            <img src="/Footer-logo.png" alt="MSL Logo" className="mb-4 w-24" />

            <h3 className="text-lg font-semibold">Maritime Solutions Ltd</h3>
            <p className="mt-2 text-sm leading-6">
              Teddington, Greater London, England, UK <br />
              +44 (0)7788547223 <br />
              +44 (0) 7867435551 <br />
              {/* <br />
            operations@maritimesolutionsltd.com <br />
            shipagency@maritimesolutionsltd.com <br />
            info@maritimesolutionsltd.com */}
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex gap-4 text-2xl text-white">
              <a href="#" className="hover:text-[#D5A63B]">
                {/* <img src="./linkedin-svgrepo-com.svg" alt="" width={20} /> */}
                {/* <FaLinkedin /> */}
              </a>
              <a href="#" className="hover:text-[#D5A63B]">
                {/* <FaYoutube /> */}
              </a>
              <a href="#" className="hover:text-[#D5A63B]">
                {/* <FaInstagram /> */}
              </a>
              <a href="#" className="hover:text-[#D5A63B]">
                {/* <FaFacebook /> */}
              </a>
            </div>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="mb-3 font-semibold">Our Solution</h4>
            <ul className="space-y-2 text-sm">
              <li>Operational</li>
              <li>Technical Solutions</li>
              <li>Quality / Safety / Environmental / Surveys</li>
              <li>Insurance Solutions</li>
              <li>Executive Assessment & TRAINING Solutions</li>
              <li>Recruitment</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Navora</li>
              <li>MSL Courses</li>
              <li>Our Global Reach</li>
              <li>Newsletter 2025</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-3 font-semibold">Subscribe to our Newsletter</h4>
            <p className="mb-4 text-sm">
              Get updates on our latest industry news and service right in your
              inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full rounded-l-md bg-slate-200 px-3 py-2 text-black outline-none"
              />
              <button className="rounded-r-md bg-[#D5A63B] px-4 py-2 font-semibold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
          Copyright © 2025 MaritimeSolutionsLtd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
