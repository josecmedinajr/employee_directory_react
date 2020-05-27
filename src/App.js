import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee';
import Button from './components/Button';
import employees from './employees.json';
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

class App extends Component {
  state = {
    employees: employees
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  sortEmployees = (a, b) => {
    console.log(a.name);
    const personA = a.name.toUpperCase();
    const personB = b.name.toUpperCase();

    let comparison = 0;
    if (personA > personB) {
      comparison = 1;
    } else if (personA < personB) {
      comparison = -1;
    }
    console.log(comparison);
    return comparison;
  }


  filterEmployees = () => {
    return this.state.employees.filter(employee => employee.department === "Tennis Player")
  }


  render() {
    return (      
      <>
      <h2>TENNIS PLAYERS DIRECTORY</h2>
      <div>Professional Tennis Players - WTA and ATP Tours.</div>
      <h6>*WTA and ATP Tours would not disclose the players' email addresses/phone numbers :)</h6>
        <Button onClick={() => this.setState({employees: this.state.employees.sort(this.sortEmployees)})}>Sort by Player's First Name</Button>
        {/* <Button onClick={() => this.setState({employees: this.filterEmployees()})}>Find All Tennis Player</Button> */}
        <Employee employees={this.state.employees} />
      </>
    );
  }
}

export default App;