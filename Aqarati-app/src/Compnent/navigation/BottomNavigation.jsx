import React from "react";
import {useViewContent} from "../../pages/store.js";

const BottomNavigation = (probs) => {
  const [activeTab, setActiveTab] = React.useState({ option1: true, option2: false });
  const {contentBox, setContentBox} = useViewContent((state) => state);
  
  
  return (
    <div className="btm-nav-wrapper">
      <div className="btm-nav btm-nav-lg static drop-shadow-xl  rounded-lg ">
        <button
          className={activeTab.option1 ? "text-primary active rounded-sm" : "text-primary "}
          onClick={() => {
            setActiveTab({ option1: true, option2: false })
            setContentBox(probs.input1)
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">{probs.input1}</span>{/* props */}
        </button>
        <button className={activeTab.option2 ? "text-primary active rounded-sm" : "text-primary"} onClick={() => {
          setActiveTab({ option1: false, option2: true })
          setContentBox(probs.input2)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">{probs.input2}</span>{/* props */}
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
