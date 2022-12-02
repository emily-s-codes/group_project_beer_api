import "./Navigation.css";
import Logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigationDiv">
            <Link to={`/`}><img src={Logo} alt="beer" className="beerLogo" /></Link>
        </div>);
}

export default Navigation;