import { Container, Row, Col } from "react-bootstrap";

const FeaturedMovies = () => {
    return (
        <div className="featured-movies justify-content-center">
            <Container>
                <Row xs={2} md={3} lg={4}>
                    <Col id="movie1" class="bg-info"></Col>
                    <Col class="bg-primary"></Col>
                    <Col class="bg-warning"></Col>
                    <Col class="bg-danger"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeaturedMovies;