import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';
import "./reg.css";


const Login = () => {
    const redirect = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const handleOnChange = (e, type) => {
        switch (type) {
            case "username":
                setError("")
                setUsername(e.target.value)
                if (e.target.value === "") {
                    setError("Username is left blank.")
                }
                break;
            case "password":
                setError("")
                setPassword(e.target.value)
                if (e.target.value === "") {
                    setError("password is left blank.")
                }
                break;

            default:
                break;
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if ("username" !== "" && "password" !== "") {
            var url = "http://localhost/react%20reg%20and%20login%20system/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {

                username: username,
                password: password
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    if (response[0].result === "Invalid username" || response[0].result === "Invalid password") {
                        setMsg(response[0].result);
                    }
                    else {
                        setMsg(response[0].result);
                        setTimeout(function () {
                            localStorage.setItem('login', true);
                            localStorage.setItem('username', username);
                            redirect('/t&c');
                        }, 5000);

                    }

                }).catch((err) => {
                    setError(err)
                    console.log(err);
                });

            // setName("");
            // setUsername("");
            // setEmail("");
            // setPassword("");
            // setPass2("");
        }
        else {
            setError("all fields are required!.")
        }
    };


    return (
        <div className=" ">
            <div className='w3-center '>
                <center>

                    <div className="w3-container w3-round-xlarge w3-border w3-padding gredient_b w3-margin" style={{ maxWidth: "600px" }}>
                        <h3 className='w3-container w3-white w3-round-xlarge w3-padding-24'><b>Login</b></h3>
                        <p>
                            {
                                msg !== "" ?
                                    <span className='w3-text-green'>{msg}</span> :
                                    <span className='w3-text-red'>{error}</span>
                            }
                        </p>
                        <p>Dont't Have an Account? <Link to="/register" className='w3-text-none w3-text-yellow'>Register Here..</Link></p>
                        <p>Forgot password already? <Link to="" className='w3-text-none w3-text-yellow'>Forgotten Password..</Link></p>
                        <hr className='w3-border w3-green w3-margin' />
                        <Form onSubmit={handleLoginSubmit}>
                            <Row className="">
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Username:</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="text"
                                            name='username'
                                            id='username'
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => handleOnChange(e, "username")}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please input your email address.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group >
                                    <Form.Label className='w3-left w3-margin-top'>Password:</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">****</InputGroup.Text>
                                        <Form.Control
                                            className='w3-input w3-border-blue'
                                            type="password"
                                            id='password'
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => handleOnChange(e, "password")}
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a password.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Button className='w3-btn w3-black w3-block w3-round-large w3-center w3-padding-8 w3-margin-top w3-margin-bottom' type="submit">Login</Button>
                        </Form>
                    </div>
                </center>
            </div>
        </div>
    );
}
export default Login;