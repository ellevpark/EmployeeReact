import React, {Component} from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import "./App.css";


class App extends Component {
  state = {
    employees,
    data:[],
    name: ""
  };
  
 
  allEmployees = () => {
    return this.state.employees.map(({id, name, occupation,location}) => 
      (
        <EmployeeTable 
        key = {id}
        id={id}
        name = {name}
        occupation = {occupation}
        location = {location}
        />
      )
    )
  }

  sortEmployees = (event)=>{
    event.preventDefault();
    let copy = [...this.state.employees]

    copy.sort((a,b)=>{
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })

    this.setState({employees: copy});
  }
  
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  render (){
    console.log(this.state)
    return (
      
    
      <Wrapper>
    
        <h1 className="title">Employees List</h1>
       
        <input className= "input"
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search by Name"
        />

        <button className="btn btn-outline-secondary" onClick={this.sortEmployees}>Sort By Name</button>
       
        <EmployeeTable employees = {this.state.employees} name = {this.state.name}/>
      
      </Wrapper>
  );
  };
}

export default App;
