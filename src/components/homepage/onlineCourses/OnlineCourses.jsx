"use client";
import { useState } from "react";
import { SectionTitle } from "../../shared/Titles";
import AllCourses from "./AllCourses";

const tabs = [
  { id: 1, title: "All", content: <AllCourses/> },
  { id: 2, title: "Accounting", content: <AllCourses/> },
  { id: 3, title: "Economics", content: <AllCourses/> },
  { id: 4, title: "Finance", content: <AllCourses/> },
  { id: 5, title: "Technologies", content: <AllCourses/> },
  { id: 6, title: "Others", content: <AllCourses/> },
];
const OnlineCourses = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
        <div className="pb-10">
          <div className="max-container">
            <SectionTitle
              title="Our Online Courses"
              subTitle="To help you build your career and accomplish your goal, we are offering 38 undergraduate and master's programs under 6 faculties."
              style="center"
            />
            <div className="flex justify-center mb-1">
              <div className="flex w-screen justify-center items-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${
                      activeTab.id === tab.id ? "tab-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p>{activeTab.content}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default OnlineCourses;
