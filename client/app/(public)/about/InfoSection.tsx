import Image from "next/image";

interface InfoSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor?: string; // Tailwind class e.g. "bg-amber-300/5"
}

export default function InfoSection({
  title,
  description,
  imageUrl,
  bgColor = "bg-amber-300/5",
}: InfoSectionProps) {
  return (
    <section className={`w-full px-6 py-16 md:py-24 ${bgColor}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          
          {/* LEFT — TEXT */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold md:text-4xl">
              {title}
            </h3>

            {/* Mobile Image */}
            <div className="flex flex-col items-start md:hidden">
              <div className="w-full max-w-xs pb-4 md:max-w-sm">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-lg text-gray-800 md:text-xl">
              {description}
            </p>
          </div>

          {/* RIGHT — IMAGE (Desktop) */}
          <div className="hidden flex-col items-center md:flex">
            <div className="w-full max-w-xs md:max-w-sm">
              <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
