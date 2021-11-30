import React, { Component } from 'react'

export default class footer extends Component { // burada function yerine class yaptik
    constructor(){
        super();
        this.state={
        users:[
                {
                    name:"Burak",
                    age:39,
                    city: "Den Haag"
                },
                {
                    name:"Murat",
                    age: 45,
                    city:"Amsterdam"
                },
                {
                    name: "Babur",
                    age: 25,
                    city: "Rotterdam"
                }
            ]
        }
    }
    render() {
        const test =35;
        const isBurak= true;
        return (
            <footer>
                <ul>
                    <h3>{test}</h3>
                {
                    this.state.users.map(user=>{
                        return(
                            <li>
                                <h2>{user.name}</h2>
                                <p>{user.age}</p>
                                <p>{user.city}</p>
                            </li>
                        )
                    })
                }
                </ul>
                <div>
                {
                    isBurak && test<=40  ? <p>Kullanici kayitli</p> : <p>kullanici yok</p>
                }
                </div>
                
            </footer>
        )
    }
}

//yada buraya ustten silip "export default Footer" yazardik