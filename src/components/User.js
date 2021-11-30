import React, { Component } from 'react'
import PropTypes from 'prop-types';
class user extends Component {
    static defaultProps={
        name: 'no information',
        department:'no information',
        salary: 'no information',
        city: 'no information',
        age: 'no information'
    }
    render() {
        //Destructing 
        const {name, department, salary,city,age} = this.props;
        return (
            <div className= "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between ">
                        <h4 className="d-inline">{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor: "pointer"}}></i>
                    </div>
                    <div className="card-body">
                    <p className="card-text">Salary Amount: {salary}</p>
                    <p className="card-text">Department: {department}</p>
                    <p className="card-text">City: {city}</p>
                    <p className="card-text">Age: {age}</p>
                
                    </div>
                </div>
            </div>
        )
    }
}


user.propTypes = { 
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}
export default user;