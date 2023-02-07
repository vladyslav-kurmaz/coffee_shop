import { Outlet, Link } from "react-router-dom";

import darkLogo from '../../image/Logo/Dark_contur_coffee.png';
import whiteLogo from '../../image/Logo/Light_contur_coffee.png';
import darkCoffee from '../../image/Logo/DarkBeansLogo.png';
// import Header from "../header/header";
// import lightLogo from '../../image/Logo/Light_contur_coffee.png';

import './owerlay.scss';


function Owerlay() {
    return (
    <>

        {/* <Header logo={lightLogo} styleColor={'#fff'} data={data}/> */}

            <nav className='grid' style={{color: '#fff'}}>
                <img src={whiteLogo} alt="logo" />
                <div className="menu__wrapper">
                    <Link to='/coffee_shop' className='menu__item' key={8} >
                        {'Coffee house'}
                        <div className='outline' ></div>
                    </Link>
                    <Link to='/coffee_shop/shop' className='menu__item' key={1} >
                        {'Our coffee'}
                        <div className='outline'></div>
                    </Link>
                    {/* <Link to='/coffee_shop/foryoupleasure' className='menu__item' key={5} >
                        {'For your pleasure'}
                        <div className='outline' ></div>
                    </Link> */}
                </div>
            </nav>


        <Outlet />

        <footer >

            <nav className='' style={{color: '#000'}}>
            <img src={darkLogo} alt="logo" />
                
                <div className="menu__wrapper footer_menu-item">
                    <Link to='/coffee_shop' className='menu__item footer_menu-item' key={8}>
                        {'Coffee house'}
                        <div className='outline' ></div>
                    </Link>
                    <Link to='/coffee_shop/shop' className='menu__item footer_menu-item' key={1} >
                        {'Our coffee'}
                        <div className='outline'></div>
                    </Link>
                    {/* <Link to='/coffee_shop/foryoupleasure' className='menu__item footer_menu-item' key={5} >
                        {'For your pleasure'}
                        <div className='outline' ></div>
                    </Link> */}
                </div>
            </nav>

            <span><img src={darkCoffee} alt="coffee icon" /></span>
        </footer>
    </>)
}

export default Owerlay;