import React, {Component} from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import "./App.css";


class App extends Component {
  state = {
    employees,
    data:[],
    vegetable: "asparagus",
    name: ""
  };
  
 
  allEmployees = () => {
    return this.state.employees.map(({id, name, image, occupation,location}) => 
      (
        <EmployeeTable 
        key = {id}
        id={id}
        name = {name}
        image = {image}
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
      <div>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder="name"
        />
      <Wrapper id="5" onClick={this.whatever}>
        asdfhalksjf
        <h1 className="title">Employees List</h1>
        <button onClick={this.sortEmployees}>Sort By Name</button>
        <EmployeeTable employees = {this.state.employees} name = {this.state.name}/>
      </Wrapper>
      </div>
  );
  };
}

export default App;
