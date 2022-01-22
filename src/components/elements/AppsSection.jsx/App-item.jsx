import { Fragment } from "react"
import { AppItemWrapper, AppListItem, AppLinksWrapper, AppLogoWrapper, AppLink} from './App-item_style'
import { SrOnlyH2 } from '../../../style/global_style'
import githublogo from '../../../assets/icons/github_logo.png'
import plusSign from '../../../assets/icons/plusSign.png'
import Tooltip from "../tooltip/Tooltip"


const AppItem = (app) => {
    
    return (

        <Fragment>
            { Object.keys(app).map(a => (
                <AppListItem 
                    key={Math.random()}>
                    <AppItemWrapper /* style={{ backgroundImage: `url(${(app[a].logo)})`}} */>
                        
                        <a href={app[a].deployLink} aria-label='app deploy'>
                            <AppLogoWrapper>
                                <img src={app[a].logo} alt="app logo" />
                            </AppLogoWrapper>
                        </a>

                        <AppLinksWrapper>
                            {/* <h1>{app[a].name}</h1>  */}
                            <a href={app[a].repoLink} aria-label='app repo'>
                                <AppLink>
                                    <Tooltip tooltipContent="go to Github" />
                                    <SrOnlyH2>GITHUB</SrOnlyH2>
                                    <img src={githublogo} alt="github logo" />
                                </AppLink>
                            </a>

                            <a href={app[a].readmeLink} aria-label='app repo'>
                                <AppLink>
                                    <Tooltip tooltipContent="go to readme"/>
                                    <SrOnlyH2>More info</SrOnlyH2>
                                   {/*  <p>More info</p> */}
                                    <img src={plusSign} alt="More infologo" />
                                </AppLink>
                            </a>
                            
                        </AppLinksWrapper>
                    </AppItemWrapper>
                </AppListItem>

            ))}
        </Fragment>
    )
}
export default AppItem