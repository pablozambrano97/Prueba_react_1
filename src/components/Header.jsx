import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className='d-flex gap-3'>
                    <img alt="" src="https://cdn-icons-png.flaticon.com/512/814/814513.png" width="30" height="30" className="d-inline-block align-top"/>
                    <h3>Paises del mundo</h3>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
