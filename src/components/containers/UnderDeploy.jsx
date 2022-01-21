import hagLogo from "../../assets/logos/hag_logo_2020_small.png"
import skyBg from '../../assets/imgs/laura-vinck_1920.png'
import { Link } from 'react-router-dom';

const UnderDeploy = () => {
    
    return (
        <section className="notFoundPage-wrapper page">
            <div className="notFound-pic-wrapper">
                <img src={hagLogo} alt="hag logo" />
                <img src={skyBg} alt="sky background" />
            </div>
            <h1>Working hard on deploying this app!</h1>
            <Link to="/"><h2>Back to Home</h2></Link>
        </section>
    )
}
export default UnderDeploy