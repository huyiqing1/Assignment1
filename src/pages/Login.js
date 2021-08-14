import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const login = {email, password};
        console.log(login);

        fetch("https://powerful-refuge-22610.herokuapp.com/auth",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(login)
        }).then((res)=>{
            if(res.ok){
                console.log(res);
                //history.push("/dashboard");
            } else {
                alert("Email or password not valid! Please try again!")
            }
        })
    }

    return (
        <div className="login">
            <h1 className="text-center text-dark">Log in</h1>
            <Form action="https://powerful-refuge-22610.herokuapp.com/auth" onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3 justify-content-md-center" as={Col} md="6" controlId="email" value={email} onChange={(e)=> setEmail(e.target.value)}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3 justify-content-md-center" as={Col} md="6" controlId="password" value={password} onChange={(e)=> setPassword(e.target.value)}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Button type="submit" className="btn-primary">Login</Button>
                </Row>
            </Form>
        </div>
    );
}

export default Login;