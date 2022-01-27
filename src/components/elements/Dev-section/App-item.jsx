import { AppItemWrapper, AppListItem, AppLinksWrapper, AppLogoWrapper,AppKeywordsWrapper, AppLink, LinkImgWrapper } from './App-item_style'
import { SrOnlyH2 } from '../../../style/global_style'
import githublogo from '../../../assets/icons/github_logo_white.png'
import readme from '../../../assets/icons/readme_icon_nostroke_yellow.png'
import Tooltip from '../tooltip/Tooltip'

const AppItem = (app) => {
  return (

    <>
      { Object.keys(app).map(a => (
        
        <AppListItem key={Math.random()} >
          
          <AppItemWrapper isDeployed={app[a].deployed}>

            <AppLogoWrapper isDeployed={app[a].deployed}>
              <Tooltip tooltipContent='deploy in progress!' parent='deploy' />
              <a href={app[a].deployLink} aria-label='app deploy'>
                <img src={app[a].logo} alt='app logo' />
              </a>
            </AppLogoWrapper>

            <AppKeywordsWrapper>
                {app[a].keywords.map(k => (
                  <p key={Math.random()}> {k}</p>
                ))}
            </AppKeywordsWrapper>

            <AppLinksWrapper>

              <AppLink>
                <a href={app[a].repoLink} aria-label='app github repo'>
                  <Tooltip tooltipContent='go to Github' />
                  <SrOnlyH2>GITHUB</SrOnlyH2>

                  <LinkImgWrapper>
                    <img src={githublogo} alt='github logo' />
                  </LinkImgWrapper>

                </a>
              </AppLink>

              <AppLink>
                <a href={app[a].readmeLink} aria-label='app github readme'>
                  <Tooltip tooltipContent='go to Readme' />
                  <SrOnlyH2>More info</SrOnlyH2>

                  <LinkImgWrapper>
                    <img src={readme} alt='More info logo' />
                  </LinkImgWrapper>
                </a>
              </AppLink>

            </AppLinksWrapper>



          </AppItemWrapper>
        </AppListItem>

      ))}
    </>
  )
}
export default AppItem
