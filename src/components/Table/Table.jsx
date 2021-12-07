import React from "react";
import "./Table.css";

export default function Table({ myData }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>TYPE</th>
            <th>NAME</th>
            <th>TOPPING</th>
          </tr>
          {myData.map((item, index) => (
            <tr key={index} className="table__content">
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.topping}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
