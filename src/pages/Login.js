import { Form, Button, Col, Row } from "react-bootstrap";

const Login = () => {
    return (
        <div className="login">
            <h1 className="text-center text-dark">Log in</h1>
            <Form>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3 justify-content-md-center" as={Col} md="6" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3 justify-content-md-center" as={Col} md="6" controlId="password">
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