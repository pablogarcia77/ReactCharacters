import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div className="menu">
                <div className="item">
                    <Link to="/">
                        <h2 className="white">Simpsons App</h2>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/charDetail" className="white">Characters Details</Link>
                </div>
                <div className="item">
                    <Link to="/about" className="white">About</Link>
                </div>
            </div>
        )
    }
}