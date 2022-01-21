import { appItems } from '../../../data/app-items'
import AppItem from './App-item'

console.log('appItems=>', appItems)
const AppsList = () => { 
    return (
        <section>
            <ul>
                { appItems.map(a => (
                    <AppItem key={Math.random()} app={a}/>
                ))}
            </ul>
        </section>
    )
}
export default AppsList