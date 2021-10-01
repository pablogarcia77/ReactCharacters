import React from "react";
import "./character.css";

export default function Character(props){

    return (
        <>
            <ul>
                <li class="character">
                    <img src={props.url} alt="" class="photo"/>
                    <h3 class="name">{props.name} {props.lastname}</h3>
                </li>
            </ul>
        </>
    )

}