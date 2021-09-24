import React from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import CharacterDetail from "../character-details/character-detail";
import About from "../about/about";

export default class App extends React.Component{

    constructor(){
        super()
    }

    render(){
        return (
            <>
                <Navbar/>
                <Home/>
                <CharacterDetail/>
                <About/>
            </>
        )
    }
}