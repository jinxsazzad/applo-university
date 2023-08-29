import Image from "next/image";
import { ActionBtn } from "../shared/Buttons";
import { SectionTitle } from "../shared/Titles";

const facultyData = [
  {
    id: 1,
    name: "Science and Information Technology",
    description:
      "A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/3e7948e37f3bdd83a90f0340d29d01c2.webp",
  },
  {
    id: 2,
    name: "Engineering and Innovation",
    description:
      "Join us at ENGINEERING AND INNOVATION to unlock your potential in the world of technology and innovation. Your journey to success starts here.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/dee5d4bc7ff859c4169318b8e9e1cd91.webp",
  },
  {
    id: 3,
    name: "Business and Entrepreneurship",
    description:
      "BUSINESS AND ENTREPRENEURSHIP program offers the knowledge and skills you need to thrive in today's dynamic business environment.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/cac3d723b17660c49155599106b10fc9.webp",
  },
  {
    id: 4,
    name: "Arts and Culture",
    description:
      "Immerse yourself in the world of ARTS AND CULTURE. Our program will help you express your creativity and make a lasting impact on society.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/a7ac450870ee09fec3b970ae8f9966c9.webp",
  },
  {
    id: 5,
    name: "Health and Wellness",
    description:
      "Join HEALTH AND WELLNESS to make a difference in people's lives. Our program focuses on promoting health and well-being in the community.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/bb7635b32cdaef3ca879e4dc8a517480.webp",
  },
  {
    id: 6,
    name: "Environmental Studies",
    description:
      "ENVIRONMENTAL STUDIES is your gateway to understanding and preserving our planet. Be part of the solution to global environmental challenges.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/1021144f9eb0dd9e0f858405e9c82949.webp",
  },
];
const Faculties = () => {
  return (
    <>
      <div className="max-container my-4">
        <SectionTitle
          style="center"
          title="Our Faculties"
          subTitle="To help you build your career and accomplish your goal, we are offering 38 undergraduate and master's programs under 6 faculties."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="card card-compact w-96 bg-base-100 shadow-md hover:shadow-xl relative flex flex-col"
            >
              <figure className="relative">
                <Image
                  src={faculty.imgUrl}
                  alt={faculty.name}
                  height={500}
                  width={500}
                  layout="responsive"
                />
              </figure>
              <div className="card-body flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="card-title">{faculty.name}</h2>
                  <p className="mt-2 flex-grow">{faculty.description}</p>
                </div>
                <div className="mt-2">
                  <ActionBtn link="#" text="Apply Now" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faculties;
