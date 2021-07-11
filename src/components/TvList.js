import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvList = ({ tvs }) => {
    return (
        <div className="tv-list my-3">
            <Row xs={2} md={4} lg={6}>
                {tvs.map((tv) => (
                    <Col key={tv.id}>
                        <Link to={`/detail?id=${tv.id}`}>
                            <img src={tv.Poster} alt={tv.Title} className="image-fluid rounded" width={190} height={350} />
                            <span className="text-dark">{tv.Title}</span>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default TvList;