import "./Homepage.css"
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="homepageDiv">
            <section className="homepageSubSection">
                <div className="homepageImgBanner">
                    <img src="https://unsplash.it/800?1" alt="random" />
                    <Link to={`/uebersicht`}><h2>All Beers</h2></Link>
                    <p className="homepageP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
                </div>
                <div className="homepageImgBanner">
                    <img src="https://unsplash.it/800?2" alt="random" />
                    <h2>Random Beer</h2>
                    <p className="homepageP">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
                </div>
            </section>
        </div>
    );
}

export default Homepage;