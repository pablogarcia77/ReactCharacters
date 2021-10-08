import React from "react";
import data from "../../data/characters.json"
import Character from "../character/character";
import { Link } from "react-router-dom";
import './home.css'

export default class Home extends React.Component{

    constructor(){
        super()
    }

    render(){
        return (
            <div className="container">
                {
                    data.Characters.map((character) => (
                        <Link to={`/charDetail/${character.id}`} className="link">
                            <Character
                                name={character.name}
                                lastname={character.lastname}
                                url={character.photo}
                            />
                        </Link>
                    ))
                }
            </div>
        )
    }
}