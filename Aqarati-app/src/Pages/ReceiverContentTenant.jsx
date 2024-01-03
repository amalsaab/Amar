import React from 'react'

const ReceiverContentTenant = (probs) => {
  return (
    <div>
        <div className="flex flex-col text-xl p-3 gap-2 border-l-2">
        <div className="text-center underline text-primary">
          <p>توثيق شقة</p>
        </div>
        <div className="flex flex-col gap-1">
          <div>رقم الشقة : شقة رقم {probs.RequestName} </div>
          <div>رقم العقد: {probs.InstrumentNumber} </div>
          <div>اسم مالك العقار: {probs.OwnerName} </div>
          <div>رقم الطابق: {probs.FloorNumber} </div>
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
  )
}

export default ReceiverContentTenant