import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import candychaseDesign from '../../../assets/webdesigns/candychase_webdesign-page.png'
import cartongeniusDesign from '../../../assets/webdesigns/cartongenius_webdesign-page.png'
import wstDesign from '../../../assets/webdesigns/wst_webdesign-page.png'
import azurcrmDesign from '../../../assets/webdesigns/azurcrm_webdesign-page.png'


const HagCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={candychaseDesign} alt='candychase Design' />
                <p className='legend'>Legend 1</p>
            </div>
            <div>
                <img src={cartongeniusDesign} alt='cartongenius Design' />
                <p className='legend'>Legend 2</p>
            </div>
            <div>
                <img src={wstDesign} alt='wst Design' />
                <p className='legend'>Legend 3</p>
            </div>
            <div>
                <img src={azurcrmDesign} alt='azur crm Design' />
                <p className='legend'>Legend 3</p>
            </div>
        </Carousel>
    )
}
export default HagCarousel
