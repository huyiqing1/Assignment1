import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTV from "../components/FeaturedTV";
import useFetch from "../components/useFetch";
import Content from "../components/Content";

const Home = () => {

    const { data: movies, movieIsPending, movieError } = useFetch("https://infinite-coast-78514.herokuapp.com/movies");
    const { data: tvs, tvsIsPending, tvsError } = useFetch("https://infinite-coast-78514.herokuapp.com/TV");


    return (
        <div className="home">
            <Hero />
            {movieError && <div>{movieError}</div>}
            {movieIsPending && <div>Loading...</div>}
            {movies && <FeaturedMovies movies={movies} />}
            {tvsError && <div>{tvsError}</div>}
            {tvsIsPending && <div>Loading...</div>}
            {tvs && <FeaturedTV tvs={tvs} />}
            <Content />
        </div>
    );
}

export default Home;