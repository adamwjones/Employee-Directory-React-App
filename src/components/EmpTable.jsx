import React from "react";
import "./EmpTable.css";

function EmpTable(props) {
  const Row = (props) => {
    return (
      <tr>
        <td>
          <img src={props.employee.img} alt="" />
        </td>
        <td>{props.employee.firstName}</td>
        <td>{props.employee.lastName}</td>
      </tr>
    );
  };

  return (
    <div className="wrapper">
      <table className="table table-lg">
        <thead className="styleTest">
          <tr>
            <td data-name="img" onClick={props.sortTable}>
              IMG
            </td>
            <td data-name="firstName" onClick={props.sortTable}>
              First
            </td>
            <td data-name="lastName" onClick={props.sortTable}>
              Last
            </td>
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
