import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div class="menu">
                <div class="item">
                    <Link to="/">
                        <h2>Simpsons App</h2>
                    </Link>
                </div>
                <div class="item">
                    <Link to="/charDetail">Characters Details</Link>
                </div>
                <div class="item">
                    <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}