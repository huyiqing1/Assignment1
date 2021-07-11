import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedMovies = ({ movies }) => {

    const featuredMovies = movies.slice(0, 6);

    return (
        <div className="featured-movies m-4">
            <Container>
                <h3 my={5}>Featured Movies</h3>
                <Row xs={2} md={4} lg={6}>
                    {featuredMovies.map((movie) => (
                        <Col key={movie.id}>
                            <Link to={`/movies?id=${movie.id}`}>
                                <img src={movie.Poster} alt={movie.Title} className="image-fluid rounded" width={190} height={350} />
                                <span className="text-dark">{movie.Title}</span>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default FeaturedMovies;