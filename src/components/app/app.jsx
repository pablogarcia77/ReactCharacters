import React, { useState,useEffect } from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import CharacterDetail from "../character-details/character-detail";
import About from "../about/about";
import data from "../../data/characters.json"
import {
    Switch,
    Route,
  } from "react-router-dom";

export default function App(){

    let charactersInfo = {}
    

    useEffect( () => {
        charactersInfo = data
        console.log(charactersInfo)
    },[])

    return (
        <>
            <Navbar/>

            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/charDetail">
                    <CharacterDetail />
                </Route>
                <Route exact path="/charDetail/:id">
                    <CharacterDetail />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>

            {/* 
            <Home/>
            <CharacterDetail/>
            <About/> */}
        </>
    )
}