import { AppItemWrapper, AppListItem, AppLinksWrapper, AppLogoWrapper, AppLink, LinkImgWrapper } from './App-item_style'
import { SrOnlyH2 } from '../../../style/global_style'
import githublogo from '../../../assets/icons/github_logo.png'
import plusSign from '../../../assets/icons/plusSign.png'
import Tooltip from '../tooltip/Tooltip'

const AppItem = (app) => {
  return (

    <>
      { Object.keys(app).map(a => (
        
        <AppListItem key={Math.random()} >
          
          <AppItemWrapper isDeployed={app[a].deployed}>

            <AppLogoWrapper isDeployed={app[a].deployed}>
              <Tooltip tooltipContent='deploy in progress!' />

              <a href={app[a].deployLink} aria-label='app deploy'>
                <img src={app[a].logo} alt='app logo' />
              </a>
            </AppLogoWrapper>

            <AppLinksWrapper>
              {/* <h1>{app[a].name}</h1>  */}
              <AppLink>
                <a href={app[a].repoLink} aria-label='app repo'>
                  <Tooltip tooltipContent='go to Github' />
                  <SrOnlyH2>GITHUB</SrOnlyH2>
                  <LinkImgWrapper>
                    <img src={githublogo} alt='github logo' />
                  </LinkImgWrapper>
                </a>
              </AppLink>

              <AppLink>
                <a href={app[a].readmeLink} aria-label='app repo'>
                  <Tooltip tooltipContent='more info' />
                  <SrOnlyH2>More info</SrOnlyH2>
                  {/*  <p>More info</p> */}
                  <LinkImgWrapper>
                    <img src={plusSign} alt='More info logo' />
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
