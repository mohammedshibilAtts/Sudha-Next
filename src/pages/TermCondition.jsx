import React from "react";
import Banner from "@/assets/Term-Conditions/Banner.webp";

function TermCondition() {
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
              Terms & Conditions
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer  */}
      <div className="container mx-auto relative h-full mt-5">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Disclaimer
            </h1>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The material contained on this Website has been prepared solely
              for the purpose of providing selected information about Indira IVF
              and its services
            </p>
            <p className="mt-4 text-[#838383]">
              Sudha Fertility Centre may make changes to the material on this
              Website, or to the Products described in it, at any time without
              notice.
            </p>
            <p className="mt-4 text-[#838383]">
              Sudha Fertility Centre does not make any warranty that material
              contained on this Website, or on any site linked to this Website,
              is complete, accurate, or up-to-date; and Sudha Fertility Centre
              is not responsible for the results of reliance on any such
              information.
            </p>
            <p className="mt-4 text-[#838383]">
              Sudha Fertility Centre accepts no responsibility for the content
              of sites unrelated to{" "}
              <a
                href="https://www.sudhafertilitycentre.com"
                className="text-blue-400"
              >
                https://www.sudhafertilitycentre.com{" "}
              </a>{" "}
              which we may have links with or for any content displayed on this
              site. The existence of links from to other sites does not imply
              <a
                href="https://www.sudhafertilitycentre.com"
                className="text-blue-400"
              >
                {" "}
                https://www.sudhafertilitycentre.com{" "}
              </a>{" "}
              endorsement of the sites’ entire content (due to the changing
              nature of the net) or of their officers or employees
            </p>
            <p className="mt-4 text-[#838383]">
              Sudha Fertility Centre does not make any warranty that use of the
              Website will be uninterrupted, virus-free, or error-free; or that
              use of the Website will not affect other software or operating
              systems used to access the Website. Any warranties provided under
              the general law are expressly excluded to the fullest extent
              possible. In particular, Sudha Fertility Centre does not warrant
              that use of the Website will not infringe the rights of any other
              person or organization; nor that the Website is of reasonable
              quality or fit for any particular purpose, even if Sudha Fertility
              Centre has received notice of an intention to use the Website for
              that purpose.
            </p>
            <p className="mt-4 text-[#838383]">
              Unless they are contained in Sudha Fertility Centre Information,
              or unless expressly stated otherwise, opinions given on this
              Website, like in the testimonial section, are those of the
              individuals making them, and not those of Sudha Fertility Centre
              and it is not responsible for such opinions or any claims
              resulting from them.
            </p>
            <p className="mt-4 text-[#838383]">
              To the extent permitted in law, Sudha Fertility Centre accepts no
              liability for any loss or damage which may be suffered by other
              parties as a direct or indirect result of using this Website
              (including loss of profit, loss of opportunity, loss of business,
              and consequential loss).
            </p>
            <p className="mt-4 text-[#838383]">
              Persons submitting material other than Sudha Fertility Centre
              Information to this Website are solely responsible for the
              material and for any claims relating to its content, whether made
              against Sudha Fertility Centre or otherwise. Whilst Sudha
              Fertility Centre does not exercise editorial control over any
              content posted to the Website by users, Sudha Fertility Centre
              reserves the right at its sole discretion to remove any content
              which it has been notified is objectionable, whether or not the
              objection is substantiated, and otherwise to review, edit, or
              delete any comments posted by users which it deems defamatory,
              unlawful, threatening, or otherwise objectionable. Notwithstanding
              the foregoing, and to the extent permitted in law, Sudha Fertility
              Centre accepts no responsibility or liability for any material
              communicated by third parties via the Website.
            </p>
            <p className="mt-4 text-[#838383]">
              To the maximum extent permitted by law, we provide you with this
              Website on the basis that we exclude all representations,
              warranties, conditions, and other terms which but for these Terms
              might have effect in relation to this Website. This clause does
              not affect your statutory rights.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy and Usage Policy  Enquiry Forms */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Privacy and Usage Policy
            </h1>
            <h1 className="font-outfit  text-xl sm:text-2xl md:text-3xl lg:text-2xl  mt-2">
              Enquiry Forms
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              When you send an email or complete an enquiry form, Sudha
              Fertility Centre will not share your email address or private
              information with anyone outside of Sudha Fertility Centre, with
              the exception of our consultants who provide the services about
              which you are enquiring. If you sign up for one of our emailing
              lists, we’ll only send you the kind of information you’ve
              requested. We won’t share your email address with anyone outside
              of Sudha Fertility Centre with the exception of healthcare
              providers who provide the services about which you are enquiring
              and expressed to know about.
            </p>
          </div>
        </div>
      </div>

      {/* Reliability of Information  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Reliability of Information
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The resources made available on Sudha Fertility Centre are for
              information only. The Website is not intended in any way to
              replace any other existing channel of external communication,
              consultation, advice, or diagnosis. Nothing on the Website is
              intended to constitute advice to anyone.
            </p>
          </div>
        </div>
      </div>

      {/* Logged Information */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Logged Information
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Sudha Fertility Centre may keep a record of the number of times a
              page is accessed in order to analyse trends, administer the site,
              and to see what pages are accessed the most. These records do not
              contain personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Exclusion of Liability */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Exclusion of Liability
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The service and materials on this Website are provided “as is” and
              Sudha Fertility Centre and the hosts of this Website expressly
              disclaim any and all warranties, express or implied, to the extent
              permitted by law including but not limited to warranties of
              satisfactory quality, merchantability, or fitness for a particular
              purpose, with respect to the service or any materials. Except in
              respect of death or personal injury arising from negligence, Sudha
              Fertility Centre and the hosts of this website hereby exclude
              liability for any claims, losses, demands, or damages of any kind
              whatsoever with respect to any information and/or services
              provided on Sudha Fertility Centre, including, but not limited to,
              direct, indirect, incidental, or consequential loss or damages,
              compensatory damages, or loss of profits or data whether based on
              a breach of contract or warranty, delict or tort (including
              negligence), product liability, or otherwise.
            </p>
          </div>
        </div>
      </div>

      {/* PC-PNDT Act */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              PC-PNDT Act
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              Sudha Fertility Centre conducts its operations in true letter and
              spirit of the PCPNDT Act. Sudha Fertility Centre not only
              prohibits any kind of sex selection or sex determination, which is
              an offence under the provisions of the PCPNDT Act, but actively
              opposes any test, technique, or procedure for sex detection of
              foetuses. Sudha Fertility Centre does not allow display of any
              content prescribing, promoting, or inclining towards the
              determination or selection of sex (Prohibited Contents) on any
              electronic media owned, managed, and controlled by it (Sudha
              Fertility Centre Media). Any third-party contents like
              testimonials of patients and relatives or articles on blogs are
              opinions of such individuals, a mere display of such third-party
              content on or through Sudha Fertility Centre Media does not
              constitute its endorsement by Sudha Fertility Centre. Sudha
              Fertility Centre specifically disassociates itself from any such
              Prohibited Contents, unauthorisedly displayed on or through Sudha
              Fertility Centre Media. The users of Sudha Fertility Centre Media
              shall note that any display of Prohibited Content on or through
              Sudha Fertility Centre Media is an unauthorised and illegal act,
              liable to be punished. Users are requested to notify us about the
              display of any Prohibited Content on or through Sudha Fertility
              Centre Media. Sudha Fertility Centre shall access the contents and
              take appropriate action in that regard.
            </p>
          </div>
        </div>
      </div>

      {/* Refunds/Cancellations */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Refunds/Cancellations
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              If for any reason you wish to cancel or refund an online paid
              registration fee, please submit Payment details (such as Date of
              payment, Transaction number, and Registration ID) along with Admin
              approval.
            </p>
            <p className="flex mx-auto mt-3 text-[#838383]">
              In 5-10 working days, we will refund full payment (Net of charges)
              if the patient has not visited.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Contact Us
            </h1>
          </div>
          <div className="sub-title mt-5">
            <p className="mt-2">
              <a href="mailto:care@sudhahospitals.com">
                care@sudhahospitals.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+917670076006">+91 767-007-6006</a>
            </p>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Video Disclaimer
            </h1>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-[#838383]">
              The mere appearance of Video Content on any website does not
              constitute an endorsement by Sudha Fertility Centre™ or its
              affiliates of such Video Content.
            </p>
            <p className="flex mx-auto mt-3 text-[#838383]">
              The Video Content has been made available for informational and
              awareness purposes only. The Video Content is not intended to be a
              substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have
              regarding a medical condition. Never disregard professional
              medical advice or delay in seeking it because of something you
              have read, heard, or seen on the Site.
            </p>
            <p className="flex mx-auto mt-3 text-[#838383]">
              Sudha Fertility Centre™ hereby disclaims any and all liability to
              any party for any direct, indirect, implied, punitive, special,
              incidental, or other consequential damages arising directly or
              indirectly from any use of the Video Content, which is provided as
              is, and without warranties.
            </p>
            <p className="flex mx-auto mt-3 text-[#838383]">
              Let me know if you need any further modifications!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermCondition;
