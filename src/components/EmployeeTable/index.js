import React from "react";
import "./style.css";

function EmployeeTable(props) {

  const searched = props.employees.filter(employee => employee.name.toLowerCase().includes(props.name.toLowerCase()));

  return (
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {searched.map(({id, name, image, occupation,location}) => 
              (<tr key={id}>
                <td>{name}</td>
                <td>{occupation}</td>
                <td>{location}</td>
              </tr>)
          )}
        </tbody>
      </table>
  );
}

export default EmployeeTable;
