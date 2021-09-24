import React from "react";
import "./character-detail.css"
import data from "../../data/characters.json"

export default class CharacterDetail extends React.Component{

    constructor(){
        super()

        this.state = {
            selectedCharacter: data["Characters"][0]
        }
        console.log(this.state)
    }

    changeCharacter = (e) => {
        this.setState(() => {
            return {
              selectedCharacter: data.Characters.find(
                //Método que busca el objeto con el atributo nombre dentro del array
                (character) => character.name == e.target.value
              ),
            };
        });
         
    }

    render(){
        return (
            <div>
                <div className="select" >
                    <select name="" id="" onChange={(event) => this.changeCharacter(event)}>
                    {
                        data.Characters.map((character) => (
                            <option value={character.name}>
                                {character.name + " " + character.lastname}
                            </option>
                        ))
                    }
                    </select>
                </div>
                <div className="chars">
                    <div className="details">
                        <p>Name: {this.state.selectedCharacter.name}</p>
                        <p>Lastname: {this.state.selectedCharacter.lastname}</p>
                        <p>Age: {this.state.selectedCharacter.age}</p>
                        <p>Phrase: {this.state.selectedCharacter["Best Phrase"]}</p>
                        <p>Friends: {this.state.selectedCharacter.Friends}</p>
                        <p>City: {this.state.selectedCharacter.City}</p>
                    </div>
                    <div>
                        <img src={this.state.selectedCharacter.photo} alt=""  className="picture"/>
                    </div>
                </div>
            </div>
        )
    }
}