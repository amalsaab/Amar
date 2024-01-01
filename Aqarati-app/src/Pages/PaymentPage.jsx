import React from 'react'

const PaymentPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Stripe Payment</h1>
        <form>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="**** **** **** ****"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            className="mt-1 p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="MM/YY"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">CVC</label>
          <input
            type="text"
            className="mt-1 p-2 w-1/4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="123"
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default PaymentPage