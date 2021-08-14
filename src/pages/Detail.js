import { useParams } from "react-router";
import useFetch from "../components/useFetch";
import DetailContainer from "../components/DetailContainer";

const Detail = () => {

    const { type, id } = useParams();
    const { data, error, isPending } = useFetch("https://powerful-refuge-22610.herokuapp.com/" + type + "/" + id);

    return (
        <div className="detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (<DetailContainer data={data}/>)}
        </div>
    );
}

export default Detail;