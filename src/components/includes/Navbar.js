import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const NavBar = () =>{
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className={classes.links} to="/home">Home</NavLink>
                    <NavLink className={classes.links} to="/cities">Cities</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;