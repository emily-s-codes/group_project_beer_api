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

    return (<div>

    </div>);
}

export default Homepage;