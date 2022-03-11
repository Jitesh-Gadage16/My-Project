import React, { useState } from 'react';
import Footer from '../core/Footer';
import Nav from '../core/Nav';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { signup } from "../auth/helper";




const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    });
                }
            })
            .catch(console.log("Error in signup"));
    };

    const successMessage = () => {
        return (
            <div className="alert alert-success"
                style={{ display: success ? "" : "none" }}>
                New account was created successfully. Plase <Link to="/signin"> Login Here </Link>
            </div>)
    }

    const errorMessages = () => {
        return (
        
            <div className="alert alert-danger"
                style={{ display: error ? "" : "none" }}>
                {error}
            </div>)
    }

    const signupForm = () => {

        return (
            <div className="Form-Main-div">
                <div className="form-box">
                    <div className="Form-head-lock">
                        <div className="">
                            <i class="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="signin-title text-center">Signup</div>
                    <div className="input-forms">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={handleChange("name")} placeholder="Name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={handleChange("email")} placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={handleChange("password")} placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button onClick={onSubmit} variant="primary" size="lg">
                                    Register
                                </Button>
                            </div>
                        </Form>
                        <Link to="/Signin">
                            <div className="signin-option">
                                Already have an account? Sign in
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Nav />
            {successMessage()} 
            {errorMessages()}
            {signupForm()}
            <p className=" text-center">{JSON.stringify(values)}</p>
            <Footer />
        </div>
    )
}



export default Signup;
