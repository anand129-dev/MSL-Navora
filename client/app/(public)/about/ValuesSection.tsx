import Image from "next/image";

const values = [
  {
    title: "Veracity",
    letter: "V",
    description: [
      "Honest role briefings",
      "Real compensation ranges",
      "Transparent risks",
    ],
  },
  {
    title: "Accountability",
    letter: "V",
    description: [
      "Follow-through after joining",
      "Ownership of outcomes—not excuses.",
    ],
  },
  {
    title: "Long-Term Fit",
    letter: "L",
    description: [
      "Hire for career alignment, cultural fit and sustainable growth",
    ],
  },
  {
    title: "Unbiased Judgement",
    letter: "U",
    description: [
      "Evaluate people, not profiles",
      "Decisions based on capability and intent—not brand names or pedigree.",
    ],
  },
  {
    title: "Equity",
    letter: "E",
    description: [
      "Treat all stakeholders fairly",
      "Balanced representation of clients and candidates, no hidden agendas.",
    ],
  },
  {
    title: "Stewardship",
    letter: "S",
    description: [
      "Handle careers with care",
      "Every move entrusted to us is never traded for speed or fees",
    ],
  },
];

export default function ValuesSection() {

  return (
    <>
      <section className="w-full px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 mb-10">

            {/* LEFT — TEXT */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold md:text-4xl">
                Our Values
              </h3>

              {/* Mobile Image */}
              <div className="flex flex-col items-start md:hidden">
                <div className="w-full max-w-xs pb-4 md:max-w-sm">
                  <Image
                    src="/about/values.jpg"
                    alt="Our Values"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-800 md:text-xl">
                At Navora, VALUES are not beliefs. They are behaviours.
              </p>
            </div>

            {/* RIGHT — IMAGE (Desktop) */}
            <div className="hidden flex-col items-center md:flex">
              <div className="w-full max-w-xs md:max-w-sm">
                <Image
                  src="/about/values.jpg"
                  alt="Our Values"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>

          </div>



          {/* VALUES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.letter}
                className="bg-slate-200/40 p-6 rounded-lg"
              >
                <div className="flex gap-2 items-center mb-4">
                  <div className="text-3xl font-bold text-white bg-secondary w-12 h-12 flex items-center justify-center rounded-full">
                    {value.letter}
                  </div>
                  <h4 className="text-2xl text-black font-semibold">
                    {value.title}
                  </h4>
                </div>

                <ul className="">
                  {value.description.map((item, index) => (
                    <li key={index} className="text-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>

  );
}
