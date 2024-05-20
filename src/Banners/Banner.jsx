import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel >
                <div>
                    <img src="https://i.ibb.co/gd3SN9g/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/nRS6tMJ/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/SRjT58y/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/tzsGDKH/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/9wy98qW/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/x5SrBqH/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;