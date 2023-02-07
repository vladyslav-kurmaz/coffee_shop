// import Menu from "../menu/menu";

import './header.scss'

import mainImage from '../../image/main-img/Main_bg.jpg';
import ourCoffee from '../../image/main-img/ourCoffee.jpg';
import pleasure from '../../image/main-img/pleasure_bg.png';

import coffeeIcon from '../../image/Logo/WhiteBeansLogo.png';


// 

function Header({logo, styleColor, main, other}) {

    // data.map(item => {
    //     console.log(item);


      if (main) {
             return (
                <header className='main'>
                    <img className="header__image" src={mainImage} alt="title photos" />
                    
                    <h1 className="header__title" style={{color: styleColor}}>Everything You Love About Coffee</h1>
                    <span><img src={coffeeIcon} alt="coffee icon" /></span>
                    <p className="header__text" style={{color: styleColor}}>
                        We makes every day full of energy and taste <br/> Want to try our beans?
                    </p>
                    <button className="header__more-info" style={{color: styleColor}}>More</button>
                </header>
            )
        } else {
            return (
                <header className='inside'>
                    <img className="header__image" src={other ? ourCoffee : pleasure} alt="title photos" />
                    
                    <h1 className="header__title" style={{color: styleColor}}>{other ? 'Our Coffee' : 'For your pleasure'}</h1>
                    
                </header>
            )
        }
    // }) ;     
}

export default Header;