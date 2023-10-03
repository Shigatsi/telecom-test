import React from "react";
import "./style.css";
export const Table = ({ headerData, data }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          {headerData.map((header, i) => (
            <th className="table__header" key={i}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => (
          <tr className="table__row" key={i}>
            <td className="table__cell" id="surname">
              {user.surname}
            </td>
            <td className="table__cell" id="name">
              {user.name}
            </td>
            <td className="table__cell" id="email">
              {user.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
