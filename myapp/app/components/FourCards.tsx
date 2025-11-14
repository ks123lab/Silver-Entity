import React from "react";

const FourCards = () => {
  const content = {
    subtitle: "OUR COMMITMENT TO EXCELLENCE",
    description:
      "We are dedicated to pioneering engineering solutions that prioritize environmental responsibility while delivering superior structural performance. Our approach combines state-of-the-art technology with time-honored construction principles to create value that lasts.",
    imageSrc: "/images/is1.jpg",
    imageAlt: "Modern construction site at sunset",
  };

  const featureCards = [
    {
      title: "Expertise",
      description:
        "We boast a team of seasoned professionals with years of experience in the design and construction industry.",
      bgColor: "bg-orange-600",
      titleColor: "text-white",
      descColor: "text-white",
    },
    {
      title: "Customized Solutions",
      description:
        "We offer fully customized solutions tailored to your specific needs and preferences. Our team will work closely with you to bring your vision to life.",
      bgColor: "bg-white",
      titleColor: "text-orange-600",
      descColor: "text-gray-700",
    },
    {
      title: "Innovation",
      description:
        "We stay up-to-date with the latest trends and techniques in the industry to ensure that we are always at the forefront of innovation design.",
      bgColor: "bg-orange-600",
      titleColor: "text-white",
      descColor: "text-white",
    },
    {
      title: "Sustainability Approach",
      description:
        "At Onyx Creation Technical Services CO. LLC, sustainability isn't just a goal; it's a shared responsibility in every step of the way, ensuring a brighter, more sustainable future for generations to come.",
      bgColor: "bg-white",
      titleColor: "text-orange-600",
      descColor: "text-gray-700",
    },
  ];

  return (
    <section className="min-h-[550px]  my-12 md:my-20 font-sans relative">
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 overflow-hidden  relative">

          {/* LEFT TEXT BLOCK */}
          <div className="md:col-span-3 bg-[#5c5c5c] py-24  p-8 sm:p-12 lg:p-16 flex flex-col">
            <h2 className="text-4xl lg:text-[43px] hidden md:block text-white mb-6 -mt-10 ml-10 md:ml-28 leading-tight text-left md:text-left">
              Transforming{" "}
              <span className="text-4xl lg:text-[43px] font-extrabold text-white leading-tight">
                Innovation,
              </span>
              <br />
              <span className="text-4xl lg:text-[43px] font-extrabold text-white leading-tight">
                Exceeding
              </span>{" "}
              Spaces
              <br />
              Choose{" "}
              <span className="text-4xl lg:text-[43px] font-extrabold text-white leading-tight">
                Excellence
              </span>
            </h2>
          </div>

          {/* RESPONSIVE 4-CARDS BLOCK */}
          <div
            className="
            absolute
            z-10
            grid
            grid-cols-1
            md:grid-cols-4
            gap-0

            w-full md:w-[1400px]
            h-auto md:h-[300px]
            overflow-hidden
            shadow-2xl
            rounded-[20px]
            md:left-1/3
            left-1/2
            -translate-x-1/2

            mt-4
            md:ml-58
            md:mt-56

            px-4 md:px-0
          "
          >
            {featureCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 flex flex-col justify-start rounded-[20px] ${card.bgColor} ${card.titleColor}`}
                style={{ borderRadius: "20px" }}
              >
                <h4
                  className={`text-xl md:text-2xl font-bold mb-3 leading-snug ${card.titleColor}`}
                >
                  {card.title}
                </h4>

                <p
                  className={`text-sm md:text-base leading-relaxed ${card.descColor} opacity-90`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE BLOCK */}
        <section className="">
            <div className=" md:col-span2 relative  h-64 md:h-auto mt-[380px] md:mt-0">
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="w-full h-[575px] object-cover"
            />
          </div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default FourCards;
