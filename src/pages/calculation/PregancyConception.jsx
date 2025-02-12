import React from "react";
import Banner from "@/assets/Policy/Banner.webp";

function PregancyConception() {
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
                Period calculation
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
              What Is The Conception Calculator?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The pregnancy conception calculator estimates the date of
              conception based on the last period date or ultrasound date. The
              date of conception is the day on which the baby is conceived. This
              tool will help expecting parents track milestones and due dates.
              Many couples find this tool valuable for planning their pregnancy
              journey and understanding their baby’s development timeline.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl flex justify-center  md:text-4xl lg:text-3xl">
              Pregnancy Conception Calculator
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
                    Conception calculators can pinpoint the exact moment of
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
                    They estimate the date based on ovulation, but the exact
                    moment varies due to sperm survival.
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
              How To Calculate The Conception Date?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              For woman who want to figure out when their pregnancy began, this
              tool will be helpful.
            </p>
            <ul className="list-disc list-inside text-[#838383]">
              <li className="list-item">Last Menstrual Period Date: </li>
              <p className="ms-5">
                Conception usually happens 11 to 21 days after the start of a
                woman’s period, assuming a 28-day cycle. By counting from the
                first day of your last period, you can estimate your conception
                window. This helps couples figure out when pregnancy may have
                started, supporting family planning and prenatal care decisions.{" "}
              </p>
              <li className="list-item">Estimated Due Date:</li>
              <p className="ms-5">
                To find your conception window, count back 40 weeks from your
                due date to get the start of your last period. Then, add 11 to
                21 days to pinpoint when conception likely occurred. This method
                is useful for women with irregular cycles and gives a reasonable
                idea of when pregnancy began.{" "}
              </p>
              <li className="list-item">Gestational Age </li>
              <p className="ms-5">
                Start with today’s date and subtract the number of weeks you are
                pregnant to find the start of your last period. Then, add 11 to
                21 days to estimate your conception window. This method helps
                track your reproductive timeline. Keep in mind that cycles can
                vary slightly from these calculations.{" "}
              </p>
            </ul>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              What Factors Affect the Accuracy of a Conception Calculator? ?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The accuracy of a conception calculator depends largely on the
              regularity of a woman’s menstrual cycle. Irregular periods can
              make it harder to pinpoint the exact conception window. Our tool
              is most accurate for women with predictable monthly cycles.
            </p>
            <ul className="list-disc list-inside text-[#838383]">
              <li>Health Conditions:</li> <p className="ms-5">Conditions like PCOS or thyroid disorders, which cause irregular cycles and anovulation, can affect the accuracy of the results.</p>
              <li>Lifestyle Factors:</li> <p className="ms-5">High stress, poor diet, inconsistent sleep, and a sedentary lifestyle can disrupt menstrual regularity and ovulation, influencing the accuracy of the calculation.</p>
              <li>Hormonal Influences:</li> <p className="ms-5">Medications that affect hormone levels, as well as women who have recently discontinued birth control, may experience changes in their menstrual cycle, impacting the accuracy of the conception estimate.</p>
            </ul>
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            Benefits of Using The Conception Calculator 
            </h1>
            <ul className="list-disc list-inside text-[#838383]">
              <li>
              Increased Conception Chances:
              </li>
              <p  className="ms-5">Timing is key for conception. The calculator helps estimate your fertile window, increasing the chances of aligning intercourse with ovulation. </p>
              <li>
              Personalized Insights:
              </li>
              <p className="ms-5">The conception calculator acts as a fertility assistant, showing your most fertile days and tracking your cycle for better health insights. </p>
              <li>
              User-Friendly Interface:
              </li>
              <p className="ms-5">Most calculators are simple to use, with easy-to-understand designs and no medical jargon, providing quick results. </p>
              <li>
              Health Awareness: 
              </li>
              <p className="ms-5">Tracking your menstrual cycle with the calculator reveals important health patterns, helping you take charge of your reproductive health. </p>
              <li>
              Emotional Support:
              </li>
              <p className="ms-5">Understanding fertility boosts confidence on the path to parenthood, offering reassurance and valuable insights. </p>
              </ul>
          </div>
        

    

          {/* <section className="mt-5">
          {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
          {/* <MarqueeComponent
            items={Ambattur.gallery}
            direction="left"
            speed="fast"
            className="custom-class"
          />
          <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
            <h2 className="text-2xl font-bold text-center ">
              Happy Patients, Happy Stories
            </h2>
            <Button text="View on YouTube " icon={<FaYoutube />} />
          </div>
          <MarqueeComponent
            items={Ambattur.gallery}
            direction="right"
            speed="fast"
            className="custom-class"
          /> */}
          {/* </div>
          </div> */}
          {/* </section>

         */}
        </div>
      </div>
    </>
  );
}

export default PregancyConception;
