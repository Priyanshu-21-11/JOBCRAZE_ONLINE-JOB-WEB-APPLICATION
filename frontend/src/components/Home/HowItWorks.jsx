import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3 style={{textDecoration:"underline"}}>How JobCraze Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                To leverage the capabilities of this platform, commence by creating an account, furnishing requisite details, and completing the registration process. Subsequently, log in to gain access to its myriad features and resources. Ensure the security of your account by employing robust credentials and consider utilizing additional security measures such as two-factor authentication. Remain vigilant about updates and adhere to the platform's guidelines to maximize your experience.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Discover a career opportunity tailored to your unique skill set, one that encourages exploration and nurtures your hidden talents. Seek out roles that provide a platform for personal and professional growth, allowing you to delve deeper into your areas of expertise while uncovering new capabilities. Embrace environments that foster innovation, creativity, and continuous learning, where you can thrive and unleash your full potential.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Submit your job application with confidence and anticipation, knowing that your qualifications and experience speak volumes. Allow 2-3 working days for the recruiter to review your submission and get in touch. During this time, keep a vigilant eye on your email inbox for any updates or communication regarding your application status. Best wishes on your job search journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
