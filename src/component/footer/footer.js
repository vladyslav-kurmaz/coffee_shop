import Menu from "../menu/menu";

import darkCoffeIcon from '../../image/Logo/DarkBeansLogo.png'

import './footer.scss';


function Footer({logo, styleColor}) {
    return (
        <footer>
            <Menu logo={logo} style={styleColor}/>
            <span><img src={darkCoffeIcon} alt="coffee icon" /></span>
        </footer>
    )
}

export default Footer;