import React, { useState } from 'react'
import { Form } from 'react-bootstrap'



export default function Buscador({setNewData, newData}) {
    
    function handleInput(e){
        e.preventDefault();
        const input=e.target.value.toLowerCase();
        
        let busqueda = newData.filter((pais)=>pais.name.common.toLowerCase().includes(input) || pais.continents[0].toLowerCase().includes(input));
        setNewData(busqueda);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(e)=>handleInput(e)} type="text" placeholder="Buscar por país/continente" />
            </Form.Group>
        </Form>
    )
}
