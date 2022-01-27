import { StyledInfoSection, InfoSectionWrapper, InfoPres, InfoPresText,InfoPresLinks, GroupIconsWrapper, IconWrapper, DownloadIconWrapper} from './InfoSection_style'
import { NavLink } from 'react-router-dom'
// import hagcv from '../../../assets/cv/HAG_CV_2022.png'
import headshot from '../../../assets/cv/headshot.png'
import downloadresumeIcon from '../../../assets/icons/download_resume_icon.png'
import githubIcon from '../../../assets/icons/github_logo_white.png'
import linkedinIcon from '../../../assets/icons/linkedin_logo.png'

const githubagneska = 'https://github.com/GitHubAgneska'
const linkedIn = 'https://www.linkedin.com/in/h-agnes-genay/'

const InfoSection = () => {
    return (
        <StyledInfoSection>
            <InfoSectionWrapper>
                
                <InfoPres>
                    <div><img src={headshot} alt='headshot' /></div>
                    <InfoPresText>
                        <h1>H.Agnes Genay</h1>
                        <h2>Frontend developer & creative</h2>
                        <h3>agneska.dev@gmail.com</h3>
                    </InfoPresText>
                </InfoPres>

                <InfoPresLinks>
    
                    <DownloadIconWrapper>
                        <NavLink to="../../../assets/cv/HAG_frontend_dev-CV_2022.png" target="_blank" download>
                            <img src={downloadresumeIcon} alt='download resume icon' />
                        </NavLink>
                    </DownloadIconWrapper>

                    
                    <GroupIconsWrapper>
                        <IconWrapper>
                            <a href={githubagneska} aria-label='link to github profile'>
                                <img src={githubIcon} alt='github icon' />
                            </a>
                        </IconWrapper>

                        <IconWrapper>
                            <a href={linkedIn} aria-label='link to linkedIn profile'>
                                <img src={linkedinIcon} alt='linkedin icon' />
                            </a>
                        </IconWrapper>
                    </GroupIconsWrapper>

                </InfoPresLinks>

            </InfoSectionWrapper>

        </StyledInfoSection>
    )
}

export default InfoSection