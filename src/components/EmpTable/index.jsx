import React from "react";
import Row from "./components/Row";

const EmpTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>IMG</td>
          <td>First</td>
          <td>Last</td>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((x, i) => (
          <Row employee={x} key={i + "-empRow"} /> // Row({ employee: x })
        ))}
      </tbody>
    </table>
  );
};

export default EmpTable;
