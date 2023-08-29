import { FaUser } from "react-icons/fa6";
import { SectionTitle } from "../shared/Titles";
import { ActionBtn } from "../shared/Buttons";

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
      <div className="max-container px-2 flex justify-between items-stretch flex-col md:flex-row gap-4">
        <div className="w-full flex-shrink">
          {/* Left Section */}
          <div className="flex flex-col h-full">
            <div className="">
              <SectionTitle
                title="What We offer"
                subTitle="At Daffodil International University, students get the opportunity
          to think, learn and grow."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {offers.map(({ id, icon, heading, text }) => (
              <div
                key={id}
                className="flex justify-between items-start gap-4 hover:shadow-md shadow-lg p-2"
              >
                <div className="bg-primary rounded-full p-5 mt-6 text-white">
                  {icon}
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
        </div>
        <div
          className="hidden md:block bg-cover bg-no-repeat bg-center w-full md:w-2/5"
          style={{
            backgroundImage: `url('http://kodeforest.net/html/uoe/extra-images/bg-1.jpg')`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Welcome;
