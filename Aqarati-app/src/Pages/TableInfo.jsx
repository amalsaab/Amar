import React from "react";

function TableInfo(props) {
  return <div>
  <tr>
                <th>{props.ID}</th>
                <td>{props.Type}</td>
                <td>{props.Date}</td>
              </tr>
  </div>;
}

export default TableInfo;
