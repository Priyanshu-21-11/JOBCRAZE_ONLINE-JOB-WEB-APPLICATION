import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiIbm, SiSamsung, SiTata, SiTesla, SiWipro } from "react-icons/si";
import { Link } from 'react-router-dom';

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hyderabad, India",
      openPositions: 10,
      link: "https://www.microsoft.com/en-us/insidetrack/careers",
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tata Group",
      location: "Mumbai, India",
      openPositions: 5,
      link: "https://www.tata.com/careers/jobs/joblisting",
      icon: <SiTata />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Bangalore, India",
      openPositions: 20,
      link: "https://jobs.apple.com/en-in/search?location=india-INDC&page=2",
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Wipro",
      location: "Bhubeshwar, India",
      openPositions: 15,
      link: "https://careers.wipro.com/careers-home/jobs",
      icon: <SiWipro />,
    },
    {
      id: 5,
      title: "IBM",
      location: "Mumbai, India",
      openPositions: 9,
      link: "https://www.ibm.com/in-en/careers",
      icon: <SiIbm />,
    },
    {
      id: 6,
      title: "Samsung",
      location: "Delhi, India",
      openPositions: 40,
      link: "https://www.samsung.com/in/about-us/careers/",
      icon: <SiSamsung />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3 style={{textDecoration:"underline"}}>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button ><Link to={element.link} target="blank" style={{ color: "black" }}>Open Positions {element.openPositions}</Link></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
