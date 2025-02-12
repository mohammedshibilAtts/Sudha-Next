"use client";

import React from "react";
import InfiniteMovingReviews from "../ui/infinityCard";


export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingReviews items={testimonials} direction="left" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "I recently visited Sudha Fertility Center in Attapur, Hyderabad, and I am thrilled to share my outstanding experience. The best part? I got a positive result on my very first attempt! The center is equipped with state-of-the-art technology and the staff is incredibly supportive and professional. Dr. Geethajali Madam is an exceptional infertility specialist who combines expertise with a compassionate approach. She made us feel comfortable from the very beginning, and her knowledge gave us great confidence in the treatment plan she recommended. The entire team, including Sister Sreedevi and Sathish from the administrative staff, were attentive and always ready to answer all my questions. The center itself is clean and welcoming, which significantly eased the stress of fertility treatments. The dedication of the staff to providing personalized care and their willingness to go the extra mile made a huge difference in my journey. I wholeheartedly recommend Sudha Fertility Center to anyone seeking fertility treatments. Their combination of advanced technology, expert care, and a truly supportive environment is truly remarkable.",
    name: "Sreekanth Reddy",
    title: "Patient",
  },
  {
    quote:
      "We found this fertility center on Google and went to meet Mrs. Geethanjali Madam. She is very polite and kind with patients. We had a sad past, and we explained everything to her. She patiently listened to our story and suggested a few tests for both me and my wife. By the end of the visit, we found out that the pregnancy was positive, which we couldn't believe. Big thanks to Geethanjali Madam for her support. Also, I would like to thank Sridevi, who was very helpful throughout the process and whose guidance was invaluable.",
    name: "Banka Sumalatha",
    title: "Patient",
  },
  {
    quote:
      "I have been married for 3 years and was trying to get pregnant, but all our efforts failed. Later, I heard about Sudha Fertility Centre, Bangalore, and visited the centre a few months back. The doctor explained all the treatments in a very polite and understandable way. The team of Bangalore Sudha treated me as their sister. I thank the entire team for the support throughout my journey. Now I'm pregnant and very happy to be a parent. My entire family is celebrating Sudha Fertility Centre, Bangalore, for giving us this great joy. I'll definitely recommend the Sudha Fertility Centre to all. Because of the good nursing staff Manonmani, experienced doctor, excellent counselor Jincy, and above all, Rufin Mam, the admin of the centre, who treated me very well and cleared all my doubts, I had a great experience. Thank you so much to the entire team. Best fertility centre in Bangalore!",
    name: "Valli Senna",
    title: "Patient",
  },
  {
    quote:
      "We are happy to inform that we are parents after trying for many months. The doctor and the entire team of Sudha Fertility Centre, Bangalore, gave us full support and guidance, especially hope. The way they behaved with us was like family. In all our reviews, consultations were good, and the approach of all staff, from reception to housekeeping, was excellent. We have been to many fertility centres, but Sudha surpassed all. The cooperation from Admin, counselor, and staff nurses was extraordinary. Our heartfelt gratitude to the entire Sudha Fertility, Bangalore team. The explanation given by the admin and counselor was satisfactory from the beginning. The entire team is equal to God. Kudos to the entire team! I definitely and strongly recommend this centre to all who are in need of children.",
    name: "Anandha Gopala Pai",
    title: "Patient",
  },
  {
    quote:
      "Thanks to Sudha Hospital, Bangalore team. We are happy to inform that we are parents now. After many years, we are parents now. Thanks to the doctors, nurses, and the entire team in Bangalore for their support and guidance. Once again, thanks to all! I will surely recommend Sudha Fertility Centre to everyone. Best fertility centre in Bangalore.",
    name: "A.K. Pandiyan Kanagaraj",
    title: "Patient",
  },
  {
    quote:
      "After 25 years of marriage, we got a positive result at Sudha Fertility Hospital in Vijayawada. Thank you very much for making our dream come true. Special thanks to the entire team at Sudha Fertility Center. I highly recommend this hospital to anyone looking for parenthood.",
    name: "M. Anjaneyulu",
    title: "Patient",
  },
  {
    quote:
      "We had a wonderful experience at Sudha Fertility Centre, Vijayawada. The staff was incredibly supportive and professional throughout the treatment. Dr. Praneetha Madam took the time to explain every step of the process, making us feel comfortable and confident. The facilities were modern and clean, and appointments were always on time. Thanks to their expertise, we are now expecting! I would highly recommend this clinic to anyone seeking fertility treatment.",
    name: "Nagasai Chowdari",
    title: "Patient",
  },
  {
    quote:
      "I highly recommend Sudha Hospitals to anyone planning for IVF, as they deliver positive results on the first attempt. They have a talented team of doctors (Dr. Lakshmi, Dr. Shyla, and Dr. Nairuti) and an amazing staff across all departments who provide the utmost care.",
    name: "Mukul Pahuja",
    title: "Patient",
  },
  {
    quote:
      "Good fertility hospital in Chennai for IVF treatment. The doctor and counselor gave us confidence. They clearly explained the treatment procedure. The treatment cost is also low. The staff nurses and other staff took very good care of us. Highly recommended!",
    name: "Vivek Mech",
    title: "Patient",
  },
  {
    quote:
      "Sudha Hospital is the best fertility center. I have taken treatment here. The doctors are very kind and explained the treatment very clearly. The staff gave good responses whenever I had doubts, and they always provided clear guidance. I am very satisfied. Thanks to Sudha Hospitals!",
    name: "Yazhini Rajendiran",
    title: "Patient",
  },
  {
    quote:
      "After 6 years of marriage, I didn’t conceive due to PCOD problems. My brother-in-law suggested Sudha Hospital and their welfare. So, we decided to proceed with the hospital and asked for treatment to get positive results. The hospital provided excellent care with highly skilled doctors.",
    name: "Mythili Murugasamy",
    title: "Patient",
  },
  {
    quote:
      "We have been trying for pregnancy for a long time and were losing hope. Later, we got to know about Dr. Naga Tejaswi at Sudha Hospital, Bangalore. She counseled us and gave us positive hope. Seeing her determination, we really built trust in her and followed every step as suggested. A few days ago, my pregnancy came positive. Thanking the doctors, Dr. Pradeepa Mam, Dr. Naga Tejaswi, and the amazing staff, including Admin Rufin Mam, Manon Mani, Reception Staffs Shilpa Mahalakshmi, Sumitha Sister, and Counselor Jincy. Thank you all for bringing us hope and happiness!",
    name: "Vignesh Rajendran",
    title: "Patient",
  },
];
