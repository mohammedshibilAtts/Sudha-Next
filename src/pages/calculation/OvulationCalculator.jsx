import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Button from "@/components/button";

function OvulationCalculator() {
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
                Ovulation Calculator
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
              What is Ovulation?
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Ovulation is an important phase in a woman’s menstrual cycle when
              the ovaries release one or more mature eggs from the follicles.
              This release can lead to pregnancy if the egg is fertilized by
              sperm. The ovulation period is the most fertile time for
              conception. If a couple is planning for pregnancy, having intimacy
              during the ovulation period can lead to positive results for
              pregnancy. For a typical 28-day cycle, ovulation usually occurs
              between days 10 and 18, with the period lasting for four days,
              beginning four days before the midpoint of the cycle.
            </p>
            <p className="mt-5 text-[#838383]">
              For women trying to conceive, knowing their ovulation period is
              essential, as fertilization can happen within 12 to 24 hours of
              ovulation. Since sperm can survive up to 5 days inside the uterus,
              having intercourse before and on the day of ovulation increases
              the likelihood of conception. If the egg is fertilized, it will
              implant in the uterus within 6 to 12 days. If fertilization does
              not occur, menstruation follows, expelling blood and tissue from
              the uterine lining. Our free ovulation calculator has been a
              helpful tool for many couples to start their parenthood journey at
              the perfect time.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl flex justify-center  md:text-4xl lg:text-3xl">
              Ovulation Calculator
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
                    The ovulation calculator works for all women, regardless of
                    cycle variability
                  </p>
                </div>
              </div>

              <div className="fact relative mt-12">
                <div className="myth absolute left-8   -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h1 className="text-white">Fact </h1>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                    They are less accurate for irregular cycles, as they rely on
                    an average cycle length.
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
              POvulation signs can differ from woman to woman, but there are
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
            How to Calculate My Fertile Days? 
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
            To know the fertile days, our free ovulation calculator is a helpful tool to identify. This calculator will help you identify your approximate ovulation date based on your previous menstrual cycles. This calculates the probable date of your next ovulation and when you are most fertile and suitable time for conception. Every woman’s menstrual cycle is unique, so knowing your fertile days can help improve your chances of conception and pregnancy.  
            </p>
          
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            How to Use the Ovulation Date Calculator? 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            According to the information you enter regarding your last menstrual cycle, our free ovulation calculator provides the details. So, you must enter the details like your last menstrual cycle and the length of your usual menstrual cycle.  
            </p>
            <p className="flex mx-auto mt-2 text-[#838383]">
            Your cycle length is the number of days between your periods, counting the first day of your period until the day before your next period starts. The average length of the menstrual cycle is around 28 days; however, it may vary for every woman. Enter the details of your last period, how long your period lasts, and the average length of your cycle. By providing all these you can get the details of your fertile days for the upcoming few months as well. 
            </p>

            
          </div>
          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            What if the Menstrual Cycle is Irregular? 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            For women who have an irregular menstrual cycle, it may be difficult to calculate the exact days of your ovulation based on the ovulation calculator alone. You can also check your probable ovulation days by checking the signs of ovulation. If you’re unsure about the ovulation period, talk to your general physician or gynaecologist to determine which online ovulation calculator will be helpful to track the ovulation days for irregular periods. 
            </p>
          </div>

          <div className="sub">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl mt-4">
            When is the Best Time to Conceive? 
            </h1>
            <p className="flex mx-auto mt-2 text-[#838383]">
            The perfect time for you to conceive is during the fertile days of your ovulation period. This time frame is from 4 to 5 days before your ovulation until the day after your ovulation occurs. Sperm can survive up to 5 days inside a woman’s body. Therefore, having intercourse at this time can increase the chances of conception. 
            </p>
          </div>


          <section className="mt-5">
          {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
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
            <Button text="View on YouTube " icon={<FaYoutube />} />
          </div>
          <MarqueeComponent
            items={Ambattur.gallery}
            direction="right"
            speed="fast"
            className="custom-class"
          />
          {/* </div>
          </div> */}
        </section>
        </div>



      </div>



     
    </>
  );
}

export default OvulationCalculator;
