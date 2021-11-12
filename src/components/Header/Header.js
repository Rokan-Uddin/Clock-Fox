import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const history = useHistory()
    const {user,logOut}= useAuth();
    const logout= ()=>{
        logOut();
        history.push('/')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/home"><span className="heading1">Clock</span> <span className="heading2"> Fox</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/explore">Explores</Nav.Link>
            { user.email && <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link> }
            </Nav>
            <Nav>
            {
                user.email ? 
                <Button onClick={logout} variant="light" className="nav-link">Logout <i className="fas fa-sign-out-alt"></i> </Button> :
                <Nav.Link as={Link} to="/login">Sign-In <i className="fas fa-sign-in-alt"></i> </Nav.Link>
            }
            </Nav>
            <Nav.Link >{user?.displayName}
            </Nav.Link>
            {
                 user.photoURL && <img className="nav-img" src={user.photoURL} alt="" />
            }
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;