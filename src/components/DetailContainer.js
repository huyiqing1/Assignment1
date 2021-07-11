import { Container, Row, Button } from "react-bootstrap";

const DetailContainer = ({ data }) => {

    return (
        <div className="detail-container m-5">
            <Container>
                <Row>
                    <img src={data.Poster} alt={data.imdbID} width={168} height={238} />
                    <div className="describe mx-3" width={761}>
                        <h2>{data.Title} - Direct by {data.Director}</h2>
                        <h4>{data.Genre}</h4>
                        <p className="btn btn-info btn-sm mr-2">{data.Runtime}</p>
                        <p className="btn btn-info btn-sm">{data.Year}</p>
                        <p>{data.Plot}</p>
                        <Button className="m-3">Rent ${data.Rent}</Button>
                        <Button className="m-3">Buy ${data.Buy}</Button>
                    </div>

                </Row>
            </Container>
            <Container><img className="large-poster" src={data.LargePoster} alt={data.Title} /></Container>
        </div>
    );
}

export default DetailContainer;