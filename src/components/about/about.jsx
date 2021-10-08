import React from "react";
import { useState } from "react";

export function validators(input){
    let errors = {}
    if(!input.email){
        errors.email = "Se requiere un email"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "No es una dirección de email correcta"
    }
    if(!input.asunto){
        errors.asunto = "Debe completar el asunto"
    } else if(input.asunto.length < 10){
        errors.asunto = "El asunto debe contener 10 caracteres como mínimo"
    }
    if(!input.mensaje){
        errors.mensaje = "Debe escribir un mensaje"
    } else if(input.mensaje.length > 256){
        errors.mensaje = "El mensaje no puede contener más de 256 caracteres"
    }
    return errors;
}




export default function About(){

    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje: ''
    })
   
    const [fails, setFails] = useState({
        email: "Se requiere un email",
        asunto: "Debe completar el asunto",
        mensaje: "Debe escribir un mensaje"
    })

    function onHandleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
        setFails(
            validators({
                ...state, 
                [e.target.name]: e.target.value
            })
        )

    }
        return (
            <>
                <div>
                    <h3>Acerca del creador</h3>
                    <p>Pablo Garcia</p>
                    <p>Estudiante del último año de la carrera Analista Progrmador Univesitario, trabajando actualmente como desarrollador Freelance y encargado del área IT de la empresa RB Equipamientos Comerciales.</p>
                    <div>
                        <form action="">
                            <div>
                                <label for="email">Email:</label>
                                <input type="text" id="email" name="email" value={state.email} onChange={(e) => onHandleChange(e)}/>
                                {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p>Todo ok </p>}
                            </div>
                            <div>
                                <label for="asunto">Asunto:</label>
                                <input type="text" id="asunto" name="asunto" value={state.asunto} onChange={(e) => onHandleChange(e)}/>
                                {fails.asunto ? <p style={{color: 'red'}}> {fails.asunto}</p> : <p>Todo ok </p>}
                            </div>
                            <div>
                                <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={(e) => onHandleChange(e)}>Escriba su mensaje...</textarea>
                                {fails.mensaje ? <p style={{color: 'red'}}> {fails.mensaje}</p> : <p>Todo ok </p>}
                            </div>
                            <button type="submit" disabled={ fails.email || fails.asunto || fails.mensaje ? true : false  }>Enviar</button>
                        </form>
                    </div>
                </div>
            </>
        )

}