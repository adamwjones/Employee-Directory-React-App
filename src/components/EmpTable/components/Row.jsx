import React from "react";

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

export default Row;
