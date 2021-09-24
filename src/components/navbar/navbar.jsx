import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div class="menu">
                <div class="item">
                    <h2>Simpsons App</h2>
                </div>
                <div class="item">
                    <a href="#">Characters Details</a>
                </div>
                <div class="item">
                    <a href="#">About</a>
                </div>
            </div>
        )
    }
}