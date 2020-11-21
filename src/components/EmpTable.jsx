import React from "react";
import "./EmpTable.css";

function EmpTable(props) {
  const Row = (props) => {
    return (
      <tr>
        <td className="text-center">
          <img src={props.employee.img} alt="" />
        </td>
        <td className="text-center">{props.employee.firstName}</td>
        <td className="text-center">{props.employee.lastName}</td>
      </tr>
    );
  };

  return (
    <div className="wrapper">
      <table className="table table-sm">
        <thead className="styleTest">
          <tr>
            <th data-name="img" onClick={props.sortTable}>
              IMG
            </th>
            <th data-name="firstName" onClick={props.sortTable}>
              First 🔻
            </th>
            <th data-name="lastName" onClick={props.sortTable}>
              Last 🔻
            </th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((x, i) => (
            <Row employee={x} key={i + "-empRow"} /> // Row({ employee: x })
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmpTable;
