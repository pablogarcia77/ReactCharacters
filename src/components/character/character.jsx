import React from "react";
import "./character.css";

export default function Character(props){

    return (
        <>
            <ul>
                <li className="character">
                    <img src={props.url} alt="" className="photo"/>
                    <div className="name">
                        <h3>{props.name} {props.lastname}</h3>
                    </div>
                </li>
            </ul>
        </>
    )

}