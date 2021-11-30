import React, { Component } from 'react'

class user extends Component {
    render() {
        //Destructing 
        const {name, department, salary,city} = this.props;
        return (
            <div>
                <ul>
                    <li>Name:{name} </li>
                    <li>Departman:{department}  </li>
                    <li>Salary: {salary} </li>
                    <li>City: {city} </li>
                </ul>
            </div>
        )
    }
}
export default user;