import { Container, Row, Col } from "react-bootstrap";

const FeaturedMovies = () => {
    return (
        <div className="featured-movies justify-content-center">
            <Container>
                <h3 my={5}>Featured Movies</h3>
                <Row xs={2} md={4} lg={6}>
                    <Col>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                    <Col>
                    <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                    <Col>
                    <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                    <Col>
                    <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                    <Col>
                    <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                    <Col>
                    <img
                            src="https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                            alt="movie1"
                            class="image-fluid rounded"
                            width={190}
                            height={350}
                            />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeaturedMovies;