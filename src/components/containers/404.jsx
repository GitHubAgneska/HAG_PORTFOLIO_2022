import notFound from "../../assets/imgs/notFound.png"
import { Link } from 'react-router-dom';
import skyBg from '../../assets/imgs/laura-vinck_1920.png'

const NotFoundPage = () => {
    
    return (
        <section className="notFoundPage-wrapper page">
            <div className="notFound-pic-wrapper">
                <img src={skyBg} alt="sky background" />
                <img src={notFound} alt="not found logo" />
            </div>
            <h1>Oup! Could not find any page like this, sorry!</h1>
            <Link to="/"><h2>Back to Home</h2></Link>
        </section>
    )
}
export default NotFoundPage