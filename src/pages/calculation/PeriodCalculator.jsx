import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Button from "@/components/button";

function Periodcalculation() {
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
              What Is A Period Calculator?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              A period calculator is a tool that helps women predict their
              menstrual cycle and period using information such as the length of
              the menstrual cycle, the date of the last period, and the average
              length of the period to calculate when the next period is due.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl flex justify-center  md:text-4xl lg:text-3xl">
              Period Calculator
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
                    Period calculators can predict your start date with 100%
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="fact relative mt-12">
                <div className="myth absolute left-8   -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h1 className="text-white">Fact </h1>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                    They estimate based on your cycle length but may vary due to
                    various health factors
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
              Signs of Ovulation
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Ovulation signs can differ from woman to woman, but there are
              some common symptoms which include:
            </p>
            <ul className="list-disc list-inside text-[#838383]">
              <li className="list-item">Rise in body temperature</li>
              <li className="list-item">
                Cervical mucus, or vaginal discharge may appear clearer,
                thinner, and stretchy, like raw egg whites.
              </li>
              <li className="list-item">Breast tenderness</li>
              <li className="list-item">Bloating</li>
              <li className="list-item">Spotting</li>
              <li className="list-item">
                Mild pain in the pelvis or lower abdomen
              </li>
              <li className="list-item">
                Nausea and headaches on the day of ovulation due to changes in
                the levels of estrogen and progesterone
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              How Do You Calculate A Menstrual Cycle And Menstrual Period?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Many women get confused between the terms, “menstrual period” and
              “menstrual cycle”. The difference between these two is, that the
              menstrual period is the days you bleed. This usually lasts for 3
              to 7 days and may vary for a few women.
            </p>
            <p className="flex mx-auto mt-5 text-[#838383]">
            The menstrual cycle is the time between the first day of your period and the first day of your next period. The menstrual cycle may vary for every woman.  
            </p>
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            Understanding The Phases Of The Menstrual Cycle 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            The menstrual cycle has four main phases: 
            </p>
            <ul className="list-disc list-inside text-[#838383]">
                <li>Menstrual Phase: The uterus sheds its lining, leading to menstrual bleeding. </li>
                <li>Follicular Phase: This phase begins alongside menstruation. The pituitary gland releases follicle-stimulating hormone (FSH), which helps the ovaries develop follicles, each containing an egg. </li>
                <li>Ovulation Phase: A surge in luteinizing hormone (LH) triggers the ovary to release a mature egg. </li>
                <li>Luteal Phase: The empty follicle forms the corpus luteum, which produces progesterone to thicken the uterine lining in preparation for pregnancy. </li>
            </ul>
          </div>
          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            Signs Of Menstrual Period 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            As your period approaches, you may notice some changes in your body. These signs can vary from person to person, but common symptoms include: 
            </p>
            <ul className="list-disc list-inside text-[#838383]">
                <li>Abdominal cramps: Mild to intense cramps in the lower abdomen. </li>
                <li>Bloating: Feeling swollen or heavier due to water retention. </li>
                <li>Breast tenderness: Soreness or swelling in the breasts. </li>
                <li>Mood swings: Irritability or sadness from hormonal shifts.</li>
                <li>Fatigue: Increased tiredness, even with enough sleep. </li>
                <li>Headaches: Hormonal changes may cause headaches. </li>
                <li>Lower back pain: A dull ache in the lower back. </li>
            </ul>

          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            Causes Of Delayed Or Missed Periods 
            </h1>
           <ul className="list-disc list-inside text-[#838383]">
            <li>Pregnancy: A missed period is a common early sign of pregnancy. </li>
            <li>Stress: High-stress levels can interfere with hormone production and delay periods. </li>
            <li>Polycystic ovary syndrome (PCOS): A hormonal imbalance that can cause irregular periods. </li>
            <li>Thyroid disorders: Both overactive and underactive thyroids can impact menstruation. </li>
            <li>Medications: Certain medications, like birth control or antidepressants, can affect the cycle. </li>
            <li>Perimenopause: Hormonal changes leading to menopause can cause irregular or missed periods</li>
           </ul>
          </div>




          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            Why Is Menstrual Period Important To Track? 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            Tracking your menstrual period helps identify patterns in your cycle, making it easier to spot irregularities. It can also help with: 
            </p>
           <ul className="list-disc list-inside text-[#838383]">
            <li>Understanding health: It helps identify underlying health issues, such as hormonal imbalances or reproductive disorders.  </li>
            <li>Fertility awareness: Tracking your cycle can help with family planning and identifying your most fertile days.  </li>
            <li>Managing symptoms: Knowing when your period is due helps manage symptoms like cramps or mood swings.  </li>
            <li>Pregnancy Planning: Regular tracking can help pinpoint the best time to conceive.  </li>
            <li>Medical insights: It provides useful information for doctors if fertility or menstrual issues arise.  </li>
           </ul>
          </div>




          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            What Are The Benefits Of Using A Period Calculator?  
            </h1>
           <ul className="list-disc list-inside text-[#838383]">
            <li>Predict cycles: Estimate your next period's start and end dates.  </li>
            <li>Tracks ovulation: Helps identify ovulation days, aiding in pregnancy planning.  </li>
            <li>Manages symptoms: Anticipates symptoms like cramps and mood swings.  </li>
            <li>Detects irregularities: Identifies cycle changes for better health insights.  </li>
            <li>Convenient: Easy way to track menstrual health.  </li>
           </ul>
          </div>

          <section className="mt-5">
           <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full">
          <MarqueeComponent
            items={Ambattur.gallery}
            direction="left"
            speed="fast"
            className="custom-class"
          />
          <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
            <h2 className="text-2xl font-bold text-center ">
              Happy Patients, Happy Stories
            </h2>
            <Button text="View You Tube " icon={<FaYoutube />} />
          </div>
          <MarqueeComponent
            items={Ambattur.gallery}
            direction="right"
            speed="fast"
            className="custom-class"
          />
          </div>
          </div>
       </section>

        </div>
      </div>
    </>
  );
}

export default Periodcalculation;
