import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// attenuation_level:75
// contributed_by:"Sam Mason <samjbmason>"
// description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
// expireAt:"2022-12-02T13:29:40.152Z"
// first_brewed:"09/2007"
// food_pairing:(3) ['Spicy chicken tikka masala', 'Grilled chicken quesadilla', 'Caramel toffee cake']
// image_url:"https://images.punkapi.com/v2/keg.png"
// name:"Buzz"
// tagline:"A Real Bitter Experience."
// _id:"5fb6a86265b9c209606e10e2"

const Detail = () => {
    const [beerList, setBeerList] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
            .then(res => res.json())
            .then((beerList) => {
                setBeerList(beerList)
            })
    }, []);

    return (<div>
        <p>{beerList.name}</p>

        <Navigation />
    </div>);
}

export default Detail;