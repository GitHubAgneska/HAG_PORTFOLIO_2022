import { Fragment } from "react"
import { AppItemWrapper, AppListItem, AppLinksWrapper, AppLogoWrapper, AppLink} from './App-item_style'

const AppItem = (app) => {
    
    return (

        <Fragment>
            { Object.keys(app).map(a => (
                <AppListItem 
                    key={Math.random()}>
                    <AppItemWrapper /* style={{ backgroundImage: `url(${(app[a].logo)})`}} */>
                        
                        <AppLogoWrapper>
                            <a
                            href={app[a].deployLink} 
                            aria-label='app deploy'>
                                <img src={app[a].logo} alt="app logo" />
                            </a>
                        </AppLogoWrapper>

                        <AppLinksWrapper>
                            {/* <h1>{app[a].name}</h1>  */}
                            <a href={app[a].repoLink} aria-label='app repo'>
                                <AppLink>
                                    <p>GITHUB</p>
                                </AppLink>
                            </a>

                            <a href={app[a].readmeLink} aria-label='app repo'>
                                <AppLink>
                                    <p>More info</p>
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