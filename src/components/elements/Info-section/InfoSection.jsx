import hagcv from '../../../assets/cv/HAG_CV_2022.png'
import { StyledSection } from  '../AppsSection.jsx/AppsSection_style'
import { ResumeWrapper} from './InfoSection_style'

const InfoSection = () => {
    return (
        <StyledSection>
            <ResumeWrapper>
                <img src={hagcv} alt='hag cv' />
            </ResumeWrapper>
        </StyledSection>
    )
}

export default InfoSection