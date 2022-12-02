import "./Homepage.css"
import { useState, useEffect } from "react";

const Homepage = () => {
    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(res => res.json())
            .then((beerList) => {
                setBeerList(beerList)
            })
    }, []);
    console.log(beerList)

    return (
        <div className="homepageDiv">
            <section className="homepageSubSection">
                <div className="homepageImgBanner">
                    <img src="https://unsplash.it/800?1" alt="random" />
                    <h2>All Beers</h2>
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