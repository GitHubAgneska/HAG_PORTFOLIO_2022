import { Fragment } from "react"
import styled from "styled-components"

const AppItemWrapper = styled.div `
    border: 1px solid grey;

`



const AppItem = (app) => {
    console.log('app=>', app)
    return (
        <Fragment>
            { Object.keys(app).map(a => (
                    <li key={Math.random()}>
                      
                            <div
                                style={{
                                    width: '50%',
                                    height: 193,
                                    border: '1px solid pink',
                                    backgroundImage: `url(${(app[a].logo)})`
                                }}>
                                <img src={app[a].logo} alt="app logo"/> 
                                {/* <img src={require(logoPath) + app[a].logo} alt="app logo"/>  */}
                                <h1>{app[a].name}</h1> 
                                <a
                                    href={app[a].deployLink} 
                                    aria-label='app deploy'>APP

                                </a>
                                
                                <p>{app[a].repoLink}</p> 
                                <p>{app[a].readmeLink}</p> 
                            </div>
                        
                    </li>

            ))}
        </Fragment>
    )
}
export default AppItem