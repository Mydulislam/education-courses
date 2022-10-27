import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const { login, googleSign, facebookLogIn} = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                setError('')
                if (user.emailVerified) {
                    navigate('/blogs')
                }
                else {
                    toast.error('your email is not verified')
                }
                form.reset()
            })
            .catch(error => setError(error.message))
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
        <Form className='w-50 mx-auto' onSubmit={handleLogin}>
            <h1>Please login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {
                success ? <p className='text-success fs-4'>Login successfully</p> : <p className='text-danger fs-4'>{error}</p>
            }
            <Button className='w-100 my-3' variant="primary" type="submit">
                Login
            </Button>
            <span className=' d-block w-100 border border-1 my-3'></span>
            <div>
                <Button onClick={handleGoogleSign} className = 'w-100 mb-2' variant="danger">SIGN IN WITH GOOGLE</Button>
                <Button onClick={handleFacebookLogin} className = 'w-100' variant="primary">SIGN IN WITH FACEBOOK</Button>
            </div>
            <p>Don't have an account. please <Link to='/register'>Register</Link></p>
        </Form>

    );
};

export default Login;