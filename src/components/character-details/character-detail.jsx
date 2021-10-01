import React, { useState, useEffect } from "react";
import "./character-detail.css"
import { useParams } from "react-router"
import data from "../../data/characters.json"

export default function CharacterDetais(){
    
    const params  = useParams();

    const [state, setState] = useState({
        selectedCharacter: data["Characters"][0]
    })

    const [fromUri, setFromUri] = useState(false)

    useEffect(
        () => {
            if(Object.keys(params).length === 0){
                setState({
                    selectedCharacter: data["Characters"][0]
                })
                console.log('dont')
                setFromUri(false)
            }else{
                setState({
                    selectedCharacter:data["Characters"].find(
                        (character) => character.id === params.id
                    )
                })
                setFromUri(true)
            }
        },[params]
    )

    const changeCharacter = (e) => {
        setState(() => {
            return {
              selectedCharacter: data.Characters.find(
                //Método que busca el objeto con el atributo nombre dentro del array
                (character) => character.name === e.target.value
              ),
            };
        });
    }

    return (
        <div>
            { 
                (!fromUri) ? (
                <div className="select" >
                    <select name="" id="" onChange={(event) => changeCharacter(event)}>
                    {
                        data.Characters.map((character) => (
                            <option value={character.name}>
                                {character.name + " " + character.lastname}
                            </option>
                        ))
                    }
                    </select>
                </div>
                ) : (<br/>)
            }
            <div className="chars">
                <div className="details">
                    <p>Name: {state.selectedCharacter.name}</p>
                    <p>Lastname: {state.selectedCharacter.lastname}</p>
                    <p>Age: {state.selectedCharacter.age}</p>
                    <p>Phrase: {state.selectedCharacter["Best Phrase"]}</p>
                    <p>Friends: {state.selectedCharacter.Friends}</p>
                    <p>City: {state.selectedCharacter.City}</p>
                </div>
                <div>
                    <img src={state.selectedCharacter.photo} alt=""  className="picture"/>
                </div>
            </div>
        </div>
    )

}