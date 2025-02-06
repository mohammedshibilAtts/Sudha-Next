import React from "react";
import Banner from "@/assets/Policy/Banner.webp";

function PregnancyCalculator() {
  return (
    <>
      {/* Banner  */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-4xl">
                Pregnancy Calculator
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/*Pregnancy Calculator */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Pregnancy Calculator
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              A pregnancy calculator, or due date calculator, helps expecting
              parents track key pregnancy milestones. It estimates the due date,
              monitors each stage, and highlights important moments like the
              baby’s first heartbeat or ultrasound. By entering details like the
              last menstrual period (LMP) and cycle length, parents can map out
              their pregnancy timeline.
            </p>
            <p className="mt-5 text-[#838383]">
              Pregnancy is the period when a baby grows inside the mother’s
              uterus, typically lasting about 40 weeks from the start of the
              last menstrual period or 38 weeks from conception. During the
              first OB-GYN visit, doctors estimate the due date using a sonogram
              and LMP.
            </p>
            <p className="mt-5 text-[#838383]">
              A week-by-week pregnancy calculator helps parents stay informed
              about their baby’s growth and prepare for each trimester. Some may
              prefer a month-by-month calculator for easier tracking.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl flex justify-center  md:text-4xl lg:text-3xl">
              Pregnancy Calculator
            </h1>
          </div>

          <div className="flex mt-3">
            <div className="myth-fact flex-1">
              <div className="title">
                <h1 className="font-outfit font-semibold text-xl sm:text-2xl flex justify-center  md:text-3xl lg:text-2xl">
                  Myth VS Fact 
                </h1>
              </div>

              <div className="mythcontent relative mt-12">
                <div className="myth absolute left-8   -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h1 className="text-white">Myth</h1>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                    Pregnancy calculators can determine the exact date of
                    conception.
                  </p>
                </div>
              </div>

              <div className="fact relative mt-12">
                <div className="myth absolute left-8   -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h1 className="text-white">Fact </h1>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                    They estimate conception based on your last period but can't
                    pinpoint the exact date due to ovulation and sperm survival
                    variations
                  </p>
                </div>
              </div>

              <div className="mythcontent"></div>
            </div>

            <div className="calculator flex-1 flex justify-end">
              <div className="w-[75%] p-6 bg-white rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Calculate Now!
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Calculate by
                      </label>
                      <select className="w-full px-3 py-2 bg-white border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        <option>Due date</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Your Due Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          placeholder="MM-DD-YY"
                          className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <button className="w-full px-4   rounded-full py-3 bg-[#173366] text-white  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Calculate My Expected Due Date
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Are Trimesters Calculated? */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              How Are Trimesters Calculated?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Pregnancy is divided into three trimesters, each marking different
              stages of the baby’s growth:
            </p>
            <p className="mt-5 text-[#838383]">
              <span className="font-semibold text-black">
                First Trimester (Weeks 1-12):
              </span>{" "}
              The baby’s heart, brain, limbs, and other organs begin to form.
            </p>
            <p className="mt-1 text-[#838383]">
              <span className="font-semibold text-black">Second Trimester (Weeks 13-28):</span> The baby continues to grow, and
              movements become noticeable.
            </p>
            <p className="mt-1 text-[#838383]">
              <span className="font-semibold text-black">Third Trimester (Weeks 29-40):</span> The baby’s organs mature, and the
              mother’s body prepares for childbirth.
            </p>
            <p className="mt-3 text-[#838383]">
              Pregnancy calculators, including the IVF week-by-week calculator,
              help expectant mothers track their baby’s development throughout
              each trimester. These tools provide detailed insights into growth
              and changes at every stage.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Are Online Pregnancy Calculators Accurate?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Online pregnancy calculators give a general idea of the pregnancy
              timeline, but the dates are only estimates. Since most women don’t
              know their exact conception date, these tools provide an
              approximate due date.
            </p>
            <p className="flex mx-auto mt-5 text-[#838383]">
              While calculators are convenient, a doctor’s evaluation is more
              accurate. Ultrasounds can help adjust the due date based on the
              baby’s size and other factors. Labor may happen one to two weeks
              before or after the estimated due date, so it’s best to use
              calculators as a guide rather than a certainty.
            </p>
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
              Planning For Pregnancy:
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
              Calculating pregnancy is simple, but preparing for it takes
              careful planning. Here’s how to get ready:
            </p>

            <ul className="text-[#838383] space-y-2 mt-3 ms-4 list-disc">
              <li>
                Preconception Check-up: Visit a doctor to check for any health
                issues and ensure your body is ready for pregnancy.
              </li>
              <li>
                Healthy Lifestyle: Eat a balanced diet, exercise regularly, and
                avoid harmful substances to improve overall health.{" "}
              </li>
              <li>
                Tracking Ovulation: Understanding your ovulation cycle helps
                time intercourse for conception. A week-by-week pregnancy
                calculator can help track ovulation and fertile days.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pregnancy Detection:  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-xl">
              Pregnancy Detection:
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Early pregnancy detection is important for timely prenatal care.
              Home tests are the most common and detect the hormone HCG in
              urine. If you think you're pregnant, visit your doctor for
              confirmation. Blood tests and ultrasounds are more accurate,
              providing detailed information about the health of both the mother
              and the baby, including the gestational age.
            </p>
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-lg mt-5">
              Pregnancy Management:
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
              Pregnancy management involves regular doctor visits, monitoring
              health, and addressing any complications. Key aspects include:
            </p>

            <ul className="text-[#838383] space-y-2 mt-3 ms-5 list-disc">
              <li>
                Prenatal Vitamins: These are crucial for fetal development, with
                folic acid being the most important.
              </li>
              <li>
                Monitoring: Regular checks on the baby’s growth and the mother’s
                health are essential, as complications can arise unexpectedly.
              </li>
              <li>
                Lifestyle Adjustments: This includes avoiding certain foods,
                reducing stress, and getting enough rest, among other changes.
              </li>
            </ul>
          </div>

          <div className="sub mt-4">
            <h1 className="font-outfit font-semibold text-lg mt-5">
              Health and Nutrition Tips During Pregnancy
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
              Good health and nutrition are crucial for both the mother and the
              baby. Here are some important tips:
            </p>

            <ul className="text-[#838383] space-y-2 mt-3 ms-5 list-disc">
              <li>Hydration: Drink plenty of water to stay well hydrated.</li>
              <li>
                Avoid Certain Foods: Stay away from raw or undercooked foods,
                unpasteurized dairy, and excess caffeine
              </li>
              <li>
                Regular Exercise: Light to moderate activities like brisk
                walking or swimming are recommended.
              </li>
              <li>
                Adequate Rest: Get enough sleep and rest to meet the body's
                increased needs.
              </li>
            </ul>
          </div>

          <p className="flex mx-auto mt-3 text-[#838383]">
            Whether using a general pregnancy week calculator or an IVF
            pregnancy calculator, both provide helpful insights into the
            pregnancy journey. However, seeing a healthcare professional ensures
            accurate tracking and care. Effective planning, proper pregnancy
            management, and good health and nutrition give the best start to the
            baby.
          </p>
        </div>
      </div>
    </>
  );
}

export default PregnancyCalculator;
