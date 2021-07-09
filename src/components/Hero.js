import { Carousel, Container} from "react-bootstrap";

const Hero = () => {
    return (
        <div className="hero">
            <Container className="justify-content-center">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src="https://images.hdqwalls.com/download/spider-man-spiderweb-2t-1920x1080.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src="https://www.desktophut.com/wp-content/uploads/2018/06/EFh6y10OW1AVYiBIw7dZ-scaled.jpg.webp" alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Hero;