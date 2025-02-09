"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const GrievancePage = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="p-20 mx-15">
        <div className="container mx-auto p-4">
          <div className="  ">
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}
            {/* <img
          src="https://t4.ftcdn.net/jpg/06/18/96/29/360_F_618962923_RVxmk7ino9HxE1vfuDit8C1aaRmzcp0m.jpg"
          alt="background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-4">
              <Link
                href="https://cms.rbi.org.in/rbi/vividflow/run/rbi#captchaAuthentication"
                passHref
              >
                <div className="shadow-md rounded-lg p-4 bg-white">
                  <img
                    src="/assets/complain.jpeg"
                    alt=""
                    width={600}
                    height={200}
                  />
                  <h2 className="text-xl font-bold">File a complaint</h2>
                  <button className="w-full mt-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                    File a complaint
                  </button>
                </div>
              </Link>
              <Link
                href="https://cms.rbi.org.in/rbi/vividflow/run/trackapplicationcomplain#TrackAuthentication"
                passHref
              >
                <div className="shadow-md rounded-lg p-4 bg-white">
                  <img
                    src="/assets/trackComplain.jpeg"
                    alt=""
                    width={600}
                    height={200}
                  />
                  <h2 className="text-xl font-bold">Track your complaint</h2>
                  <button className="w-full mt-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Track your complaint
                  </button>
                </div>
              </Link>
              <Link
                href="https://cms.rbi.org.in/rbi/vividflow/run/feedbackapplicationrevamp#feedback%20auth"
                passHref
              >
                <div className="shadow-md rounded-lg p-4 bg-white">
                  <img
                    src="/assets/feedback.jpeg"
                    alt=""
                    width={600}
                    height={200}
                  />
                  <h2 className="text-xl font-bold">Give feedback</h2>
                  <button className="w-full mt-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Give feedback
                  </button>
                </div>
              </Link>
            </div>
          </div>
         <div className="my-10 py-10 px-5 box-border bg-emerald-500 text-white">We will redirect on RBI Governer Website for your, file Complaining, file Tracking and giving feedback us</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GrievancePage;
