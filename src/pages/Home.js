import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";

const Home = () => {
    return ( 
        <div className="home">
            <Hero />
            <FeaturedMovies />
        </div>
     );
}
 
export default Home;