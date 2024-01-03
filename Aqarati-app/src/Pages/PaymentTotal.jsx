import React from "react";

function PaymentTotal(props) {
  return <div >
          <tr className="flex justify-between w-full">
        <th>{props.ID}</th>
        <td>{props.Total}</td>
        <td>{props.Date}</td>
        <td>{props.state}</td>
      </tr>
  </div>;
}

export default PaymentTotal;
