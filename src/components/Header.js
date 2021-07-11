import Logo from './Logo';
import { Navbar, Nav, Row, Col, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header bg-dark bg-gradient">
            <Navbar>
                <Container fluid>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Logo />
                        <span className="fw-bold text-secondary navbar-brand mx-3"><p className="text-white">Seneca Movie Theater</p></span>
                        <Row>
                            <Col><Nav.Link href="/"><p className="text-white">Home</p></Nav.Link></Col>
                            <Col><Nav.Link href="/movie"><p className="text-white">Moive</p></Nav.Link></Col>
                            <Col><Nav.Link href="/tv"><p className="text-white">TV</p></Nav.Link></Col>
                            <Col md="auto"><Nav.Link href="/signup"><p className="text-white">Sign up</p></Nav.Link></Col>
                            <Col><Nav.Link href="/login"><p className="text-white">Login</p></Nav.Link></Col>
                        </Row>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button type="submit" variant="outline-light"><i className="bi bi-search"></i></Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;