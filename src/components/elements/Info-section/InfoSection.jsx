import { StyledInfoSection, InfoSectionWrapper, InfoPres} from './InfoSection_style'
import { NavLink } from 'react-router-dom'
import hagcv from '../../../assets/cv/HAG_CV_2022.png'
import headshot from '../../../assets/cv/headshot.png'

const InfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoSectionWrapper>
                <InfoPres>
                    <div><img src={headshot} alt='' /></div>
                    <div>
                        <h1>H.AGNES GENAY</h1>
                        <h2>DEVELOPPEUR FRONTEND & CREATIVE</h2>
                        <h2>agneska.dev@gmail.com</h2>
                    </div>
                </InfoPres>

                <NavLink to="../../../assets/cv/HAG_CV_2022.png" target="_blank" download>
                    <p>Download cv</p>
                </NavLink>
                {/* <img src={hagcv} alt='hag cv' /> */}
            </InfoSectionWrapper>
        </StyledInfoSection>
    )
}

export default InfoSection