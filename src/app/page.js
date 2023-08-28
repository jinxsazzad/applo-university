"use client";
import Faculties from "@/components/homepage/Faculties";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import OnlineCourses from "@/components/homepage/onlineCourses/OnlineCourses";
import ParallaxSec from "@/components/homepage/ParallaxSec";
import Welcome from "@/components/homepage/Welcome";
import { useState } from "react";

const facultyData = [
  {
    id: 1,
    name: "Science and Information Technology",
    description:
      "A degree from SCIENCE AND IT will transform your life for the better. We are inviting you to prepare yourself for the fourth industrial revolution which is already happening.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/3e7948e37f3bdd83a90f0340d29d01c2.webp",
    date: 11 - 10 - 2023,
  },
  {
    id: 2,
    name: "Engineering and Innovation",
    description:
      "Join us at ENGINEERING AND INNOVATION to unlock your potential in the world of technology and innovation. Your journey to success starts here.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/dee5d4bc7ff859c4169318b8e9e1cd91.webp",
  },
  {
    id: 3,
    name: "Business and Entrepreneurship",
    description:
      "BUSINESS AND ENTREPRENEURSHIP program offers the knowledge and skills you need to thrive in today's dynamic business environment.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/cac3d723b17660c49155599106b10fc9.webp",
  },
  {
    id: 4,
    name: "Arts and Culture",
    description:
      "Immerse yourself in the world of ARTS AND CULTURE. Our program will help you express your creativity and make a lasting impact on society.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/a7ac450870ee09fec3b970ae8f9966c9.webp",
  },
  {
    id: 5,
    name: "Health and Wellness",
    description:
      "Join HEALTH AND WELLNESS to make a difference in people's lives. Our program focuses on promoting health and well-being in the community.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/bb7635b32cdaef3ca879e4dc8a517480.webp",
  },
  {
    id: 6,
    name: "Environmental Studies",
    description:
      "ENVIRONMENTAL STUDIES is your gateway to understanding and preserving our planet. Be part of the solution to global environmental challenges.",
    imgurl:
      "https://daffodilvarsity.edu.bd/images/faculty/1021144f9eb0dd9e0f858405e9c82949.webp",
  },
];
const tabs = [
  { id: 1, title: "All", content: "Content for Tab 1" },
  { id: 2, title: "Accounting", content: "Content for Tab 2" },
  { id: 3, title: "Economics", content: "Content for Tab 3" },
  { id: 4, title: "Finance", content: "Content for Tab 3" },
  { id: 5, title: "Technologies", content: "Content for Tab 3" },
  { id: 6, title: "Others", content: "Content for Tab 3" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>
      {/* Features Section */}
      <section className="bg-bg-primary">
        <Features />
      </section>
      {/* Welcome Section */}
      <section className="bg-bg-secondary">
        <Welcome />
      </section>
      {/* Faculties Sections */}
      <section className="bg-bg-primary">
        <Faculties />
      </section>
      {/* Parallax Sections */}
      <section>
        <ParallaxSec />
      </section>
      {/* Online Courses Sections */}
      <section className="bg-bg-primary">
        <OnlineCourses />
      </section>
      <>
        <div className="flex justify-between items-center p-10 bg-bg-secondary">
          <div>
            <div className="flex">
              <div>
                <h1>
                  <span className="text-9xl text-[#D2D2D2]">03</span> DEC
                </h1>
                <p>lsdafjldskfldaksfklasdfklsdjflk</p>
                <p>ksdfalkjl;</p>
                <button>Read More</button>
              </div>
              <img
                src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
                alt=""
              />
            </div>
            <div className="flex">
              <div>
                <h1>
                  <span className="text-9xl text-[#D2D2D2]">03</span> DEC
                </h1>
                <p>lsdafjldskfldaksfklasdfklsdjflk</p>
                <p>ksdfalkjl;</p>
                <button>Read More</button>
              </div>
              <img
                src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <div>
                <h1>
                  <span className="text-9xl text-[#D2D2D2]">03</span> DEC
                </h1>
                <p>lsdafjldskfldaksfklasdfklsdjflk</p>
                <p>ksdfalkjl;</p>
                <button>Read More</button>
              </div>
              <img
                src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
                alt=""
              />
            </div>
            <div className="flex">
              <div>
                <h1>
                  <span className="text-9xl text-[#D2D2D2]">03</span> DEC
                </h1>
                <p>lsdafjldskfldaksfklasdfklsdjflk</p>
                <p>ksdfalkjl;</p>
                <button>Read More</button>
              </div>
              <img
                src="http://kodeforest.net/html/uoe/extra-images/news1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
