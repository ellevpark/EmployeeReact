import React, {Component} from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import "./App.css";


class App extends Component {
  state = {
    employees,
    data:[],
    login: false
  };
  
 
  allEmployees = () => {
    return this.state.employees.map(({id, name, image, occupation,location}) => {
      return (
        <EmployeeCard 
        key = {id}
        id={id}
        name = {name}
        image = {image}
        occupation = {occupation}
        location = {location}
        />
      )
    })
  }
  

  render (){
    console.log(this.state)
    return (
    <Wrapper>
      <h1 className="title">Employees List</h1>
      {this.allEmployees()}
    </Wrapper>
  );
  };
}

export default App;
