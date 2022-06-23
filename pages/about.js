import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>FYP-22-S2-10 - About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="py-5 container">
        <h3 className="text-center">About Us</h3>
        <div className="mt-4 pt-4 pb-2 px-3">
          <div className="text-center mb-4">
            <img
              src="/images/about/uni_logo.png"
              alt="dental clinic management record"
            />
          </div>
          <hr />
          <p className="text-center mx-auto mt-5" style={{ maxWidth: "700px" }}>
            As a team consisting of SIM-UOW final-year students, we are assigned
            a project to develop a web-application-based Dental Health Record
            Management System. This tool will help organize all patients&apos;
            records for our clients which are dental healthcare providers and
            make it efficient for users of our software to search for required
            information of their patient.
          </p>
          <p className="text-center mx-auto" style={{ maxWidth: "700px" }}>
            The project&apos;s objective is to make our service unique and
            outstanding as compared to the other web apps in the market whereby
            we target specially to dental clinics business owners that wants to
            have their business being hosted on a website so that customers can
            view what each clinic specializes in and where is the nearest
            specialized clinic of their choice before submitting their
            particulars for an appointment. The data that the customer submitted
            will be consolidated and be under the clinic the customer submitted
            under.
          </p>
          <p className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
            With this system, it will increase the productivity of our users as
            all relevant and useful information of our clients&apos; customers
            will be collated into our database to make it easier for the users
            to search for patients&apos; medical history, drug allergies,
            treatments undergone, etc. Other than that, our system will also
            show a list of our clients&apos; clinics with their specialization
            and the distance from their location to the clinic.
          </p>
          <hr />
        </div>
      </div>
      {/* <div className="container">
        <h3 className="text-center">Preview</h3>
        <div className="mt-4 pt-4 pb-2 px-3">
          <div>
            <img src="" alt="dental clinic management record" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default about;
