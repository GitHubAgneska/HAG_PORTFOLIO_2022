import { appItems } from '../../../data/app-items'
import AppItem from './App-item'
import { StyledSection } from '../../../style/global_style'
import { StyledUl } from './App-item_style'

const AppsList = () => { 
    return (
        <StyledSection>
            <StyledUl>
                { appItems.map(a => (
                    <AppItem key={Math.random()} app={a}/>
                ))}
            </StyledUl>
        </StyledSection>
    )
}
export default AppsList