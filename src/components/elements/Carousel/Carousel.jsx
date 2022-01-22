import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HagCarousel = () =>  {

        return (
            <Carousel>
                <div>
                    <img src="../../../assets/imgs/bubble_Asset 2.png" alt="hjhjhj" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="../../../assets/imgs/bubble_Asset 3.png" alt="hjhjhj" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="../../../assets/imgs/bubble_Asset 5.png" alt="hjhjhj" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        )
}
export default HagCarousel