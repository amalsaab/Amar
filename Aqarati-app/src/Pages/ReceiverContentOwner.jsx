import React from "react";

const ReceiverContentOwner = (probs) => {
  return (
    <div>
      <div className="flex flex-col text-xl p-3 gap-2 border-l-2">
        <div className="text-center underline text-primary">
          <p>نوع الطلب: {probs.RequestType}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div>الطلب: {probs.RequestName} </div>
          {/* <div>رقم الصك: {probs.InstrumentNumber} </div>
          <div>تاريخ الصك: {probs.InstrumentDate} </div>
          <div>مساحة العقار: {probs.Area} </div> */}
          <div className="flex justify-between items-center">
            <div>حالة الطلب: </div>
            <div className="">
              {probs.RequestStatus === "" && (
                <div className="flex gap-3">
                  <button className="bg-accent py-2 w-24 rounded-lg text-center text-gray-600">
                    <div>قبول</div>
                  </button>
                  <button className="bg-primary py-2 w-24 rounded-lg text-center text-gray-600">
                    رفض
                  </button>
                </div>
              )}

              {probs.RequestStatus === "مقبول" && (
                <div className="bg-accent py-2 w-24 rounded-lg text-center text-gray-600">
                  مقبول
                </div>
              )}
              {probs.RequestStatus === "مرفوض" && (
                <div className="bg-primary py-2 w-24 rounded-lg text-center text-gray-600">
                  مرفوض
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiverContentOwner;
