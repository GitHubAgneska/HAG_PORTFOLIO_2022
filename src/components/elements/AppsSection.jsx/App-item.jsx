import { Fragment } from "react"
import styled from "styled-components"

const AppItemWrapper = styled.div `
    border: 1px solid grey;
    width: 30%;
    display: flex;flex-flow: column nowrap;       
    justify-content: center;
    align-items: center;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: contain;
`

const AppListItem = styled.li`
    padding: 5%;
`
const AppLinksWrapper = styled.div `
    display: flex;flex-flow: column nowrap;
`



const AppItem = (app) => {
    
    return (

        <Fragment>
            { Object.keys(app).map(a => (
                <AppListItem 
                    key={Math.random()}>
                    <AppItemWrapper style={{ backgroundImage: `url(${(app[a].logo)})`}}>
                        <AppLinksWrapper>
                            {/* <h1>{app[a].name}</h1>  */}
                            <a
                                href={app[a].deployLink} 
                                aria-label='app deploy'>APP
                            </a>
                            <a
                            href={app[a].repoLink} 
                            aria-label='app repo'>GITHUB
                            </a>
                            <a
                            href={app[a].readmeLink} 
                            aria-label='app repo'
                            > More info
                            </a>
                        </AppLinksWrapper>
                    </AppItemWrapper>
                </AppListItem>

            ))}
        </Fragment>
    )
}
export default AppItem