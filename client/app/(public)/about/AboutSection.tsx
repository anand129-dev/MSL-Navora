import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl mb-4">
              Gloabl Talent Solutions for Maritime, Shipping & Energy
            </h2>
            {/* <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-secondary">
              Global Talent Solutions for Maritime, Shipping & Energy
            </h2> */}

            {/* Logo (Mobile Only) */}
            <div className="md:hidden mb-6 flex justify-center">
              <div className="px-8 bg-[linear-gradient(180deg,#013e6a,#43d1ff,#013e6a,#419ad6,#01186a)]">
                <Image
                  src="/navora.png"
                  alt="Navora Logo"
                  width={180}
                  height={180}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-5 text-gray-600 text-lg md:text-lg">
              <p>
                Navora is the recruitment arm of{" "}
                <span className="font-semibold text-gray-700">
                  Maritimesolutionsltd
                </span>
                , A leading Specialized Consultancy Firm. Connecting organisations with exceptional
                talent across Maritime, Shipping, and Energy.
              </p>
              <p>
                We deliver end-to-end recruitment solutions across Maritime, Shipping, Energy, Logistics, Trading, and Professional Services — from specialist roles to executive leadership.
              </p>

              {/* <div>
                <p>
                  Navora collaborates with leading organisations across the maritime ecosystem, including:
                </p>
                <ul className="list-disc pl-6">
                  <li>Ship owners and operators</li>
                  <li>Ship management companies</li>
                  <li>Shipyards and engineering firms</li>
                  <li>Maritime consultancies</li>
                  <li>Classification societies and registries</li>
                  <li>Training institutions</li>
                  <li>Equipment and technology providers</li>
                  <li>Port and logistics companies</li>
                  <li>Legal and insurance organisations</li>
                </ul>
                <p>
                  Our goal is to build long-term partnerships that create value for both clients and professionals.
                </p>
              </div>

              <div>
                We specialise in sourcing hard-to-find talent and delivering tailored recruitment solutions, including:
                <ul className="list-disc pl-6 ">
                  <li>Permanent hiring</li>
                  <li>Executive search</li>
                  <li>Talent mapping</li>
                  <li>Workforce advisory</li>
                  <li>Market insights</li>
                </ul>
              </div>

              <p>We operate with a truly international outlook, supporting organisations and professionals across major maritime and energy hubs worldwide. Our network spans multiple regions, enabling us to combine global expertise with strong local market knowledge.</p> */}

            </div>
          </div>

          {/* RIGHT SIDE LOGO */}
          <div className="hidden md:flex justify-center">
            <div className="px-10 bg-[linear-gradient(180deg,#013e6a,#43d1ff,#013e6a,#419ad6,#01186a)]">
              <Image
                src="/navora.png"
                alt="Navora Logo"
                width={240}
                height={240}
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
