import Logo from './Logo';
import { Navbar, Nav, Row, Col, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header bg-dark bg-gradient">
            <Navbar>
                <Container fluid>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Logo />
                        <span class="fw-bold text-secondary navbar-brand mx-3"><p class="text-white">Seneca Movie Theater</p></span>
                        <Row>
                            <Col><Nav.Link href="/"><p class="text-white">Home</p></Nav.Link></Col>
                            <Col><Nav.Link href="/movie"><p class="text-white">Moive</p></Nav.Link></Col>
                            <Col><Nav.Link href="/tv"><p class="text-white">TV</p></Nav.Link></Col>
                            <Col md="auto"><Nav.Link href="/sign-up"><p class="text-white">Sign up</p></Nav.Link></Col>
                            <Col><Nav.Link href="/login"><p class="text-white">Login</p></Nav.Link></Col>
                        </Row>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button type="submit" variant="outline-light"><i class="bi bi-search"></i></Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;