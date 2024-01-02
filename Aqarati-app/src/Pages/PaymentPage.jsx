import React from 'react'

const PaymentPage = () => {
  const amount = 15000; 

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">تفاصيل الدفع</h1>
          <p className="text-gray-500 text-sm">ادخل معلومات البطاقة</p>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">المبلغ</label>
            <div className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-100">
              {amount} ريال
            </div>
          </div>
          <label className="block text-sm font-medium text-gray-700">رقم البطاقة</label>
          <input
            type="text"
            className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="**** **** **** ****"
          />

          <div className="flex mt-4">
            <div className="w-1/2 mr-2">
              <label className="block text-sm font-medium text-gray-700">تاريخ الانتهاء</label>
              <input
                type="text"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-sm font-medium text-gray-700">الرقم السري</label>
              <input
                type="text"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            ادفع الان
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage