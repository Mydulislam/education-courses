import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Register = () => {
    const [accepted, setAccepted] = useState(false)
    const { register, profileUpdate, verifyEmail, googleSign, facebookLogIn } = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        register(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                handleProfile(name, photoURL)
                handleEmailVerify()
                setError('')
                setSuccess(true)
                toast.success('Please verify your email')
                navigate('/courses')
                form.reset()
            })
            .catch(error => setError(error.message))

        const handleProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            profileUpdate(profile)
        }
        const handleEmailVerify = () => {
            verifyEmail()
                .then(() => { })
                .catch(error => console.error(error.message))
        }
    }
    const handleCheck = (event) =>{
        setAccepted(event.target.checked)
    }
    const handleGoogleSign = ()=>{
        googleSign(googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setSuccess(true)
        })
        .catch(error=> setError(error.message))
    }
    const handleFacebookLogin = ()=>{
        facebookLogIn(facebookProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setSuccess(true)
        })
        .catch(error=> setError(error.message))
    }
    return (
        <Form className='w-50 mx-auto' onSubmit={handleRegister}>
            <h1>Please Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter photo link" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                onClick={handleCheck}
                type="checkbox"
                label = {<>Accept <Link to='/terms'>Terms Conditions</Link></>}
                />
            </Form.Group>
            {
                success ? <p className="text-success fs-4">Registration successfull</p> : <p className="text-danger fs-4">{error}</p>
            }
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <span className=' d-block w-100 border border-1 my-3'></span>
            <div>
                <Button onClick={handleGoogleSign} className = 'w-100 mb-2' variant="danger">SIGN IN WITH GOOGLE</Button>
                <Button onClick={handleFacebookLogin} className = 'w-100' variant="primary">SIGN IN WITH FACEBOOK</Button>
            </div>
            <p>Already have an account. please <Link to='/login'>Login</Link></p>
        </Form>
    );
};

export default Register;