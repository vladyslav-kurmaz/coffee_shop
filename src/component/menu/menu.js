import { Routes, Route, Link } from 'react-router-dom';

import MainPage from '../pages/main_page/main-page';
import Pleasure from '../pages/pleasure/pleasure';
import ShopPage from '../pages/shop-page/shop-page';
import NotFound from '../NotFoud/not-found';

import './menu.scss'

function Menu({logo, styleColor, classNames}) {

    let key = 1;

    // const menuButtons = [
    //     {name: 'Coffee house', href: '/coffeehouse'},
    //     {name: 'Our coffee', href: '/ourcoffe'},
    //     {name: 'For your pleasure', href: '/foryoupleasure'}
    // ];

    // const menuButton = menuButtons.map(({name, href}) => {
    //     return (
            // <button href={href} className='' key={key++} style={{color: styleColor}}>
            //     {name}
            //     <div className='outline' style={{backgroundColor: styleColor}}></div>
            // </button>
    //     );
    // })

    return (
        <nav className={classNames}>

            <img src={logo} alt="logo" />
            <div className='menu__wrapper'>
                <Link to='/' className='' key={key++} style={{color: styleColor}}>
                    {'Coffee house'}
                    <div className='outline' style={{backgroundColor: styleColor}}></div>
                </Link>
                <Link to='/ourcoffe' className='' key={key++} style={{color: styleColor}}>
                    {'Our coffee'}
                    <div className='outline' style={{backgroundColor: styleColor}}></div>
                </Link>
                <Link to='/foryoupleasure' className='' key={key++} style={{color: styleColor}}>
                    {'For your pleasure'}
                    <div className='outline' style={{backgroundColor: styleColor}}></div>
                </Link>
            </div>
            <Routes>
                <Routes path="/" element={<MainPage />} />
                <Routes path="/ourcoffe" element={<ShopPage />} />
                <Routes path="/foryoupleasure" element={<Pleasure />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

        </nav>
    );


}

export default Menu;