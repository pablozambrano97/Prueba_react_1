import React from 'react'
import  Table  from 'react-bootstrap/Table'
export default function Listado({ newData }) {
    let tableItems=false;
    if(newData){
        tableItems= newData.sort(function (a, b) {
            if (a.name.common > b.name.common) {
                return 1;
            }
            if (a.name.common < b.name.common) {
                return -1;
            }
            return 0;
        }).map((pais)=>(
        <tr key={pais.name.common}>
            <td>{pais.name.common}</td>
            <td>{pais.capital? pais.capital[0] : 'Desconocido'}</td>
            <td>{pais.continents[0]}</td>
            <td>{pais.languages? pais.languages.spa || pais.languages.eng || pais.languages.fra: 'Idioma no disponible' }</td>
            <td>{pais.population}</td>
            <td><img src={pais.flags.png} style={{width:'8rem', height:'5rem'}} alt="Bandera"/></td>
            <td style={{textAlign:'center' , padding:'5px 0 0 0'}}><a href={pais.maps.googleMaps} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png" alt="google maps" style={{width:'2rem'}}/></a></td>
        </tr>));
    }

    return (
        <Table hover striped borderless responsive size="lg" variant='dark'>
        <thead>
            <tr>
                <th>País</th>
                <th>Capital</th>
                <th>Continente</th>
                <th>Idioma</th>
                <th>Población</th>
                <th>Bandera</th>
                <th>Ubicación</th>
            </tr>
        </thead>
        <tbody>
            {tableItems}
    </tbody>
    </Table>
    )
}
