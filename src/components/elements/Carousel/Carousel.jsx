import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import candychaseDesign from '../../../assets/webdesigns/candychase_webdesign-page.png'
import cartongeniusDesign from '../../../assets/webdesigns/cartongenius_webdesign-page.png'
import wstDesign from '../../../assets/webdesigns/wst_webdesign-page.png'
import wstDesign2 from '../../../assets/webdesigns/wst_webdesign-page-2.png'
import azurcrmDesign from '../../../assets/webdesigns/azurcrm_webdesign-page.png'
import monkeytransferDesign from '../../../assets/webdesigns/monkeytransfer_webdesign-page.png'

const designLayouts = [ candychaseDesign, cartongeniusDesign, wstDesign, wstDesign2, azurcrmDesign, monkeytransferDesign ]

const HagCarousel = () => {
    return (
        <Carousel>
            { designLayouts.map( d => (
                
                <div key={Math.random()}>
                    <img src={d} alt='candychase Design' loading="lazy"/>
                   {/*  <p className='legend'>Legend 1</p> */}
                </div>

            )) }
        </Carousel>
    )
}
export default HagCarousel
