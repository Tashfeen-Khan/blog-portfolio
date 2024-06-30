import React from "react";
import Navbar from "../_component/navbar";
import BasicInputField from "../_component/feilds/basicInputFeild";

import contectUs from "../../../public/images/ContactUs.png";
import BasicBtn from "../_component/Buttons/BasicBtn";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light-Bg dark:bg-dark-bg">
        <section className="body-font">
          <div
            className=" px-5  flex justify-center"
            style={{ height: "50vh" }}
          >
            <div className="w-full sm:w-3/4 bg-light-Text rounded-lg overflow-hidden  flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              />
            </div>
          </div>
        </section>

        <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 items-center ">
          <div className="m-2 p-2 w-full h-fit  hover:border-2 hover:border-light-Card_H_border rounded-xl hover:bg-light-Card_H_bg dark:hover:bg-dark-icon_bg  flex flex-col ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-light-H_blue text-2xl mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-light-Text">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
            </div>
            <div>
              <BasicInputField label={"Name"} />
              <BasicInputField label={"Email"} />
              <BasicInputField label={"Message"} />

              <BasicBtn title="Send Message" />
            </div>
          </div>

          <img
            src="/images/ContactUs.png"
            alt="Contact Us"
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};

export default page;
