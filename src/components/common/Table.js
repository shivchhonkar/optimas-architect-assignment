import React from "react";
import "./Table.css";

function Table(props) {
  const { rows, columns } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              {index > 0 && (
                <div className="table-heading-content">
                  {column}
                  <i className="arrow-icon">
                    <img src="./images/arrow_icon.svg" />
                  </i>
                  <i className="filter-icon">
                    <img src="./images/filter_icon.svg" />
                  </i>
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr className="expandable-row" key={index + 1}>
            <td>
              <i className="icon">
                <img src="./images/arrow_icon.svg" alt="user" />
              </i>
            </td>
            <td>{row.id}</td>
            <td>{row.userName}</td>
            <td>{row.emailId}</td>
            <td>{row.phone}</td>
            <td>{row.NoOfProjects}</td>
            <td>{row.Designation}</td>
            <td>{row.Actions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
