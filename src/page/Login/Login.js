import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
    const { login, googleSign, gitHubLogin, setLoading} = useContext(AuthContext)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider()
    // const facebookProvider = new FacebookAuthProvider()
    const gitHubProvider = new GithubAuthProvider();
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
                    navigate(from, {replace:true})
                }
                else {
                    toast.error('your email is not verified')
                }
                form.reset()
            })
            .catch(error => setError(error.message))
            .finally(()=>{
                setLoading(false)
            })
    }
    const handleGoogleSign = ()=>{
        setSuccess(false)
        googleSign(googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setSuccess(true)
            if (user.emailVerified) {
                navigate(from, {replace:true})
            }
            else {
                toast.error('your email is not verified')
            }
        })
        .catch(error=> setError(error.message))
        .finally(()=>{
            setLoading(false)
        })
    }
    const handleGitHubLogin = ()=>{
        gitHubLogin(gitHubProvider)
        .then((result) =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => setError(error.message))
        .finally(()=>{
            setLoading(false)
        })
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
                <Button onClick={handleGoogleSign} className = 'w-100 mb-2' variant="danger"><FaGoogle className='me-3'/> SIGN IN WITH GOOGLE</Button>
                <Button onClick={handleGitHubLogin} className = 'w-100' variant="primary"><FaGithub className='me-3'/> SIGN IN WITH GITHUB</Button>
            </div>
            <p>Don't have an account. please <Link to='/register'>Register</Link></p>
        </Form>

    );
};

export default Login;