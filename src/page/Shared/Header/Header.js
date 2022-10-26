import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Education-Planner-Logo.png'
import { BiSun } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { useState } from 'react';
const Header = () => {
    const [toggleDarkLight, setToggleDarkLigh] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className='mb-2'>
            <Container>
                <Link to='/'><img style={{ height: '40px' }} src={logo} alt="" /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='ms-5'>
                    <Nav className="me-auto">
                        <Link to='/courses' className="nav-link text-dark fw-bold">Courses</Link>
                        <Link to='/faq' className="nav-link text-dark fw-bold">FAQ</Link>
                        <Link to='blogs' className="nav-link text-dark fw-bold">Blog</Link>

                    </Nav>
                    <Nav className='align-items-lg-center'>
                        <Link className='nav-link text-dark fw-bold' to='/login'>Login</Link>
                        <Link className='nav-link text-dark fw-bold' to='/register'>Register</Link>

                        <Link className='fs-3' onClick={() => setToggleDarkLigh(!toggleDarkLight)}>
                            {
                                toggleDarkLight ? <BiSun className='mb-2' /> : <CiDark className='mb-2' />
                            }
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;