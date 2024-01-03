import React, { useEffect } from "react";
import BottomNavigation from "../Compnent/navigation/BottomNavigation";
import {useViewContent} from "../pages/store.js"
import SenderContent from "../pages/SenderContent";
import ReceiverPage from "./ReceiverPage.jsx";

const ViewRequest = () => {
    const {contentBox, setContentBox} = useViewContent((state) => state);
    useEffect(() => {
        setContentBox("مرسلة")
    }, []);
  return (
    <div>
      <div className="bg-white outline outline-[#BBA98D] flex flex-col m-10 rounded-md pt-0  ">
        <BottomNavigation input1="مرسلة" input2="مستقبلة" className="" />
        {contentBox === "مرسلة" && <SenderContent />}
        {contentBox === "مستقبلة" && <ReceiverPage />}
      </div>
    </div>
  );
};

export default ViewRequest;
