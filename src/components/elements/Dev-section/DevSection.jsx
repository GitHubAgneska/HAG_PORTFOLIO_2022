import {appItems} from '../../../data/app-items'
import AppItem from './App-item'
import {StyledSection, ListWrapper, StyledUl} from './DevSection_style'
import {} from './App-item_style'

const DevSection = () => {
    return (
        <main>
            
            <StyledSection>
                <ListWrapper>
                    <StyledUl> {
                        appItems.map(a => (
                            <AppItem key={Math.random()} app={a}/>
                            ))
                    } </StyledUl>
                </ListWrapper>
            </StyledSection>
        </main>
    )
}
export default DevSection
