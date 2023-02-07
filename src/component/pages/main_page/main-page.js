import Header from "../../header/header";
import MainInfo from "../../main-info/main-info";
import Offers from "../../offers/offers";
// import Pleasure from "../pleasure/pleasure";
// import Footer from "../../footer/footer";

// import darkLogo from '../../../image/Logo/Dark_contur_coffee.png';
import lightLogo from '../../../image/Logo/Light_contur_coffee.png';

import './main-page.scss'

function MainPage({data, getIdItem}) {
    
    return (
        <>
            <Header logo={lightLogo} styleColor={'#fff'} main='true'/>
            <MainInfo />
            <Offers data={data} getIdItem={getIdItem}/>
            
        </>
    );
}

export default MainPage;