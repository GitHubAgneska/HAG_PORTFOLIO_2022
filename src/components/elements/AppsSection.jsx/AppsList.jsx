import { appItems } from '../../../data/app-items'
import AppItem from './App-item'
import { StyledSection } from '../../../style/global_style'


const AppsList = () => { 
    return (
        <StyledSection>
            <ul>
                { appItems.map(a => (
                    <AppItem key={Math.random()} app={a}/>
                ))}
            </ul>
        </StyledSection>
    )
}
export default AppsList