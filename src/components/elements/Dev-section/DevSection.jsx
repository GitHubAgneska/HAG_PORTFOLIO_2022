import {appItems} from '../../../data/app-items'
import AppItem from './App-item'
import {StyledSection} from './DevSection_style'
import {StyledUl} from './App-item_style'

const DevSection = () => {
    return (
        <main>
            <StyledSection>
                <StyledUl> {
                    appItems.map(a => (
                        <AppItem key={Math.random()} app={a}/>
                        ))
                } </StyledUl>
            </StyledSection>
        </main>
    )
}
export default DevSection
