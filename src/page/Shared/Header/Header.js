import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/Education-Planner-Logo.png'
import { BiSun } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { useState } from 'react';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
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
                        {
                            user?.emailVerified === true?
                                <>
                                    {
                                        user?.photoURL ?
                                            <Image title={user.displayName} style={{width:40, height: 40, marginRight:'20px' }} roundedCircle src={user?.photoURL}></Image>
                                            :
                                            <FaUserAlt className='text-white me-2' style={{ height: 40 }}></FaUserAlt>
                                    }
                                    <NavLink className='text-dark fw-bold me-3' onClick={handleLogOut}>LogOut</NavLink>
                                </>
                                :
                                <>
                                    <Link className='nav-link text-dark fw-bold' to='/login'>Login</Link>
                                    <Link className='nav-link text-dark fw-bold' to='/register'>Register</Link>
                                </>
                        }


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