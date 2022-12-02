import "./Navigation.css";
import Logo from "../assets/img/Logo.svg";

const Navigation = () => {
    return (
        <div className="navigationDiv">
            <img src={Logo} alt="beer" className="beerLogo" />
        </div>);
}

export default Navigation;