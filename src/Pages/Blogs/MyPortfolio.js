import React from "react";
import myImage from "../../assets/Junayed.jpg";
import { AiFillGithub } from "react-icons/ai";
import { toast } from "react-toastify";

const MyPortfolio = () => {
  return (
    <div>
      <div className="mt-6 max-w-screen-lg md:flex mx-auto">
        <div className="md:w-2/5 p-2 relative">
          <div className="md:fixed">
            <div className="md:block">
              <img alt="" className="h-32 w-32 rounded-full mx-auto " src={myImage} />
              <div className="mb-12 text-center mt-4 justify-center items-center">
                <h1 className="text-2xl  text-gray-800 font-bold">Mohammad Junayed Khan Noor</h1>
                <div className="md:text-lg text-gray-600">Junior Web Developer</div>
                <div className="text-gray-600 md:hidden mt-1">(junayednoor@gmail.com)</div>
              </div>
            </div>
            <div className="mx-4 my-4 hidden md:block">
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z" />
                    <path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
                  </svg>
                </div>
                junayednoor@gmail.com
              </div>
              <div className="my-5 text-lg text-gray-600 flex">
                <div className="mr-2">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z" />
                    <path d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z" />
                  </svg>
                </div>
                Dhaka, Bangladesh
              </div>
              <span
                onClick={() =>
                  window.open("https://www.linkedin.com/in/mohammad-junayed-khan-noor-097079141/")
                }
                className="my-5 text-blue-500 text-lg  flex"
                role="button"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
                  </svg>
                </div>
                LinkedIn
              </span>
              <span
                onClick={() => window.open("https://github.com/JunayedKhanNoor")}
                className="my-5 text-blue-500 text-lg  flex"
                role="button"
              >
                <div className="mr-2">
                  <AiFillGithub className="text-neutral h-6 w-6" />
                </div>
                Github
              </span>
            </div>
            <div className="mx-4 hidden md:block">
              <span onClick={() => toast("Please email to Junayed")} className="btn w-full">
                Hire me
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-2 w-full">
          <div className="mx-4 mb-6">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Career Objective</h1>
            <p className="text-lg">
              To peruse strong engineering skill as an enthusiastic and hardworking web application
              developer with focused ethics, an ability to increase my knowledge and contribute to
              significant software development.
            </p>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Education</h1>
            <ul>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">
                  B.Sc. in Computer Science & Engineering (CSE)
                </h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">
                      Green University of Bangladesh
                    </small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">2017 - 2021 </small>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">Professional Training</h2>
                <div className="mt-1">
                  <div>
                    <i className="bx bx-buildings"></i>
                    <small className="text-base text-gray-800">Complete Web Development</small>
                  </div>
                  <div>
                    <i className="bx bx-calendar text-sm"></i>
                    <small className="text-sm text-gray-600">By Programming-Hero</small>
                  </div>
                </div>
              </li>
              <h1 className="mb-4 text-4xl text-gray-700 font-bold">Projects</h1>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">Auto-Mart</h2>
                <div className="mt-1">
                  <div>
                    <small className="text-base text-gray-800">
                      Automobile warehouse management
                    </small>
                  </div>
                  <div>
                    <span
                      onClick={() => window.open("https://auto-mart-45993.web.app/")}
                      className="my-5 text-blue-500 text-lg"
                      role="button"
                    >
                      Live Link
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">To-Do-List </h2>
                <div className="mt-1">
                  <div>
                    <small className="text-base text-gray-800">
                    Task management app
                    </small>
                  </div>
                  <div>
                    <span
                      onClick={() => window.open("https://to-do-2623e.web.app/")}
                      className="my-5 text-blue-500 text-lg"
                      role="button"
                    >
                      Live Link
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <h2 className="text-2xl font-medium text-gray-800">Immigration-Lab </h2>
                <div className="mt-1">
                  <div>
                    <small className="text-base text-gray-800">
                    Immigration consultancy website
                    </small>
                  </div>
                  <div>
                    <span
                      onClick={() => window.open("https://immigration-lab.web.app/")}
                      className="my-5 text-blue-500 text-lg"
                      role="button"
                    >
                      Live Link
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skill</h1>
            <ul>
              <li className="mb-6 flex flex-wrap">
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  HTML-5
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  CSS-3
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Bootstrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  React Bootstrap
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Tailwind css
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  DaisyUI
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ReactJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  React Router
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  React Query
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  React Hook Form
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  React Query
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  ExpressJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  NodeJS
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  MongoDB
                </span>
                <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                  Firebase Authentication
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
