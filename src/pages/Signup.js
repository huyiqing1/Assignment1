import { Form, Button, Col, Row } from "react-bootstrap";

const Signup = () => {
    return (
        <div className="signup">
            <Form>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3" as={Col} md="3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Row>
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
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3 justify-content-md-center" as={Col} md="6" controlId="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            /*onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}*/
                            id="validationForm"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Button type="submit" className="btn-primary">Register</Button>
                </Row>
            </Form>
        </div>
    );
}

export default Signup;