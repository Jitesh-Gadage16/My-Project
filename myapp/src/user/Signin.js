import React, { useState } from 'react';
import Footer from '../core/Footer';
import Nav from '../core/Nav';
import { Form, Button } from 'react-bootstrap'
import { Link,Redirect } from 'react-router-dom';
import { signin, authenticate, isAutheticated } from "../auth/helper";



const Signin = () => {

    const [values, setValues] = useState({

        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false

    })

    const { email, password, error, didRedirect, loading } = values;
    const { user } = isAutheticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        });
                    });
                }
            })
            .catch(console.log("signin request failed"));
    };

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard"/>;
            } else {
                return <Redirect to="/user/dashboard"/> ;
            }
        }
        if (isAutheticated()) {
            return <Redirect to="/" />;
        }
    };

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        );
    };


    // const successMessage = () => {
    //     return (
    //         <div className="alert alert-success"
    //             style={{ display: success ? "" : "none" }}>
    //             New account was created successfully. Plase <Link to="/signin"> Login Here </Link>
    //         </div>)
    // }

    const errorMessages = () => {
        return (

            <div className="alert alert-danger"
                style={{ display: error ? "" : "none" }}>
                {error}
            </div>)
    }


    const signinForm = () => {
        return (
            <div className="Form-Main-div">
                <div className="form-box">
                    <div className="Form-head-lock">
                        <div className="">
                            <i class="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="signin-title text-center">SignIn</div>
                    <div className="input-forms">
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleChange("email")} value={email} type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleChange("password")} value={password} type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button onClick={onSubmit} variant="primary" size="lg">
                                    Register
                                </Button>
                            </div>
                        </Form>
                        <Link to="/Signup">
                            <div className="signin-option">
                                Don't have an account? Sign Up
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
            {loadingMessage()}
            {errorMessages()}

            {signinForm()}
            {performRedirect()}
            <p className=" text-center">{JSON.stringify(values)}</p>

            <Footer />
        </div>
    )

}

export default Signin;
