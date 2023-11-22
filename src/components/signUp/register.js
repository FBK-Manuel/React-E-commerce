// import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebaseDataBase/firebaseConfig';
// import { signOut } from "firebase/auth";
import "./reg.css";



function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    // const [validated, setValidated] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        setTimeout(function () {
            setMsg("");
        }, 9000)
    }, [msg])



    const handleInputChange = (e, type) => {
        switch (type) {
            case "name":
                setError("");
                setName(e.target.value);
                if (e.target.value === "") {
                    setError("Name is left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Email is left blank!");
                }
                break;
            case "username":
                setError("");
                setUsername(e.target.value);
                if (e.target.value === "") {
                    setError("Username is left blank!");
                }
                break;
            case "password":
                setError("");
                setPassword(e.target.value);
                if (e.target.value === "") {
                    setError("Password is left blank!");
                } else if (password.length < 8) {
                    setError("Password is less than 8");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if (e.target.value === "") {
                    setError("Confirm password is left blank!");
                } else if (e.target.value !== password) {
                    setError("Both passwords does not match!");
                }
                break;


            default:
                break;
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && email !== "" && username !== "" && password !== "" && pass2 !== "") {
            var url = "http://localhost/react%20reg%20and%20login%20system/register.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                name: name,
                username: username,
                email: email,
                password: pass2
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    setMsg(response[0].result);
                }).catch((err) => {
                    setError(err)
                    console.log(err);
                });

            setName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setPass2("");
            history("/login")
        } else {
            setError("All field are required");
        }

    };

    function checkUsername() {
        var url = "http://localhost/react%20reg%20and%20login%20system/checkUsername.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            username: username,
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) => {
                setError(err)
                console.log(err);
            });
    }

    function checkEmail() {
        var url = "http://localhost/react%20reg%20and%20login%20system/checkEmail.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email,
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) => {
                setError(err)
                console.log(err);
            });
    }


    return (
        <div className='w3-center '>
            <center>
                <section className='w3-container imageB'>
                    <div className="w3-container w3-round-xlarge w3-border gredient_b w3-padding w3-margin" style={{ maxWidth: "700px" }}>
                        <h3 className='w3-container w3-white w3-round-xlarge w3-padding-24'><b>Registration</b></h3>
                        <p>
                            {
                                msg !== "" ?
                                    <span className='w3-text-green'>{msg}</span> :
                                    <span className='w3-text-red'>{error}</span>
                            }
                        </p>

                        <p>Already Have an Account? <Link to="/login" className='w3-text-none w3-text-yellow'>Login Here..</Link></p>
                        <hr className='w3-border w3-green w3-margin' />
                        <Form onSubmit={handleSubmit}>
                            <Row className="">
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Full Name:</Form.Label>
                                    <InputGroup >
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="text"
                                            name='name'
                                            value={name}
                                            onChange={(e) => handleInputChange(e, "name")}
                                            placeholder="Full Name"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Username:</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="text"
                                            name='username'
                                            onBlur={checkUsername}
                                            value={username}
                                            onChange={(e) => handleInputChange(e, "username")}
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />

                                    </InputGroup>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Email:</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id="inputGroupPrepend">@gmail.com</InputGroup.Text>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="email"
                                            name='email'
                                            value={email}
                                            onBlur={checkEmail}
                                            onChange={(e) => handleInputChange(e, "email")}
                                            placeholder="Email Address"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Password:</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id="inputGroupPrepend">****</InputGroup.Text>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="password"
                                            value={password}
                                            name='password'
                                            onChange={(e) => handleInputChange(e, "password")}
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />

                                    </InputGroup>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Confirm Password:</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">****</InputGroup.Text>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="password"
                                            value={pass2}
                                            name='ConfirmPassword'
                                            onChange={(e) => handleInputChange(e, "pass2")}
                                            placeholder="Confirm Password"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Form.Group className=" w3-left w3-margin-top w3-margin-bottom">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                                <Link to="/t&c" className='w3-text-blue w3-text-none '>terms & conditions</Link>
                            </Form.Group>
                            <Button className='w3-btn w3-black w3-block w3-round-large w3-center w3-padding-8 w3-margin-top w3-margin-bottom' type="submit">Register</Button>
                            <Button className='w3-btn w3-black w3-block w3-round-large w3-center w3-padding-8 w3-margin-top w3-margin-bottom'><i className='fa fa-google w3-text-red'></i>Sign Up With Google</Button>

                        </Form>
                    </div>
                </section>
            </center>
        </div>
    )
}

export default Registration;