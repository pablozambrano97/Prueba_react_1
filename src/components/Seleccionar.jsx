import React from 'react'
import { Form } from 'react-bootstrap';

export default function Seleccionar({setIdioma, idioma}) {
    function handleSelect(e){
        setIdioma(e.target.value);
    }

    return (
        <div className='form-floating'>
            <Form.Select className='form-floating' onChange={(e)=>handleSelect(e)} value={idioma} id='idioma' >
                <option value="spa" id='spa'>Español</option>
                <option value="english" id='eng' >Inglés</option>
                <option value="french" id='fra'>Francés</option>
            </Form.Select>
            <label htmlFor="idioma">Mostrar países por idioma</label>
        </div>

    )
}
