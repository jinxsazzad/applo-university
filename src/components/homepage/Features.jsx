import React from "react";
import { FaAward, FaMoneyBills} from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <MdCastForEducation />,
      heading: "Admission",
      subText:
        "We have students coming from different backgrounds, cultures, and nationalities as well. More than 500 international students are enrolled in various programs.",
    },
    {
      id: 2,
      icon: <SiBookstack />,
      heading: "Programs",
      subText:
        "We are offering 38 undergraduate and graduate programs under 26 departments. Our curriculum is designed to help the students to develop the skills required for 21st-century employment.",
    },
    {
      id: 3,
      icon: <FaMoneyBills />,
      heading: "Tuition Fees",
      subText:
        "We offer affordable tuition fees for students with the option to pay them in multiple installments to create convenience for students.",
    },
    {
      id: 4,
      icon: <FaAward />,
      heading: "Scholarship",
      subText:
        "We make sure all our students get the help they need to complete the degree. Scholarships are available for students with excellent academic results as well as for the students who are struggling financially.",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-2 justify-between items-center max-container mb-6">
        {features.map(({ id, icon, heading, subText }) => (
          <div
            key={id}
            className=" flex flex-col justify-center items-center text-center shadow-md hover:shadow-sm
            hover:bg-[#24CCC0] bg-[#F8F8F8] p-6"
          >
            <div className="text-3xl">{icon}</div>
            <h3 className="text-3xl font-semibold">{heading}</h3>
            <p className="text-[#777790]">{subText}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
