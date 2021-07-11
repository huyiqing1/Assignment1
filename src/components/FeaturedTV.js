import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedTV = ({tvs}) => {

        const featuredTvs = tvs.slice(0, 6);

        return (
                <div className="featured-tv m-4">
                        <Container>
                                <h3 my={5}>Featured TV Shows</h3>
                                <Row xs={2} md={4} lg={6}>
                                        {featuredTvs.map((tv) => (
                                                <Col key={tv.id}>
                                                        <Link to={`/detail/tv/${tv.id}`}>
                                                                <img src={tv.Poster} alt={tv.Title} className="image-fluid rounded" width={190} height={350} />
                                                                <span className="text-dark">{tv.Title}</span>
                                                        </Link>
                                                </Col>
                                        ))}
                                </Row>
                        </Container>
                </div>
        );
}

export default FeaturedTV;