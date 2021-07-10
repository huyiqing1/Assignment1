import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTV from "../components/FeaturedTV";

const Home = () => {
    return ( 
        <div className="home">
            <Hero />
            <FeaturedMovies />
            <FeaturedTV />
        </div>
     );
}
 
export default Home;