import { ActionBtn } from "@/components/shared/Buttons";
import Image from "next/image";
import React from "react";
const facultyData = [
  {
    id: 1,
    name: "Science and Information Technology",
    description:
      "A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.",
    imgUrl:
      "https://daffodilvarsity.edu.bd/images/faculty/3e7948e37f3bdd83a90f0340d29d01c2.webp",
    date: 11 - 10 - 2023,
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
];
const AllCourses = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 ">
        {facultyData.map((faculty ,index) => (
          <>
            <div key={index} className="card rounded-md card-compact w-96 bg-base-100 shadow-md hover:shadow-xl relative">
              <div className=" bg-primary rounded-b-full h-16 w-16 p-4 z-50 absolute end-0 flex items-center justify-center">
                <p className="text-xl font-semibold text-white">50$</p>
              </div>
              <figure className="relative">
                <Image
                  src={faculty.imgUrl}
                  alt={faculty.name}
                  layout="responsive"
                  height={500}
                  width={500}
                  className="rounded-md rounded-b-none"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{faculty.name}</h2>
                <p>Dec 27, 2015 Jan 27, 2016</p>
                <p>{faculty.description}</p>
                <hr />
                <div className="card-actions justify-between items-center mt-2">
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                          src="http://kodeforest.net/html/uoe/extra-images/cur_ft-2.jpg"
                          alt=""
                          width={100}
                          height={100}
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <div className="ms-3 ">
                      <h4 className="text-xl font-semibold">Peter Parker</h4>
                      <p> web instructor</p>
                    </div>
                  </div>
                  <ActionBtn link="#" text="Enroll Now" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
