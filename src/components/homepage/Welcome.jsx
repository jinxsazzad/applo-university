import React from "react";
import { FaUser } from "react-icons/fa6";
import { SectionTitle } from "../shared/Titles";

const Welcome = () => {
  const offers = [
    {
      id: 1,
      icon: <FaUser />,
      heading: "Accommodation",
      text: "We are providing a secure and convenient living facility for our students. DIU dormitories are a home away from home...",
    },
    {
      id: 2,
      icon: <FaUser />,
      heading: "Transportation",
      text: "To make the student’s life easier and safe, we are providing 50+ buses from different points of Dhaka city to t...",
    },
    {
      id: 3,
      icon: <FaUser />,
      heading: "Library",
      text: "DIU library has a collection of over 50000 books, journals, research papers and enriching the resources day by day. O...",
    },
    {
      id: 4,
      icon: <FaUser />,
      heading: "One student one laptop",
      text: "Under the ‘One student one laptop’ project, DIU has distributed over 25000 free laptops among the student...",
    },
    {
      id: 5,
      icon: <FaUser />,
      heading: "Blended Learning Platform",
      text: "To engage students in learning after face-to-face classes, our faculty members and students collaborate in the online...",
    },
    {
      id: 6,
      icon: <FaUser />,
      heading: "Sports Club & Gymnasium",
      text: "To ensure the mental and physical well being of our students and employees, we are providing a well-equipped gymnasium...",
    },
  ];
  return (
    <>
      <div className="max-container my-8 py-8 flex justify-between items-center flex-col md:flex-row gap-4">
        <div className="w-3/5">
          <div>
            <SectionTitle
              title="What We offer"
              subTitle="At Daffodil International University, students get the opportunity
              to think, learn and grow."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            {offers.map(({ id, icon, heading, text }) => (
              <div key={id} className="flex justify-between items-start gap-4 hover:shadow-md shadow-lg p-2">
                <div className="bg-primary rounded-full p-5 mt-6 text-white">{icon}
                </div>
                <div>
                  <h1 className="mt-5 text-xl leading-normal font-semibold">
                    {heading}
                  </h1>
                  <p className="mt-3 pb-2 break-words text-lg leading-normal text-slate-gray">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center w-full md:w-2/5"
          style={{
            backgroundImage: `url('http://kodeforest.net/html/uoe/extra-images/bg-1.jpg')`,
            height: "100vh", // Set the height as needed
          }}
        >
          {/* Your content goes here */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
