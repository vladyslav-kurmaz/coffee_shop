// import { Route, Routes, Link } from 'react-router-dom';


import Header from '../../header/header';
import ShopInfo from '../../shop-info/shop-info';
import ShopFilter from '../../shop-filter/shop-filter';
import ShopProduct from '../../shop-product/shop-product';


import shopPhoto from '../../../image/shop/Shop_photo.png';

import './shop-page.scss'

function ShopPage({data, getIdItem, apdateTemp, apdateFilter}) {


    return (
        <>
            <Header  styleColor={'#fff'} main={false} other={true}/>
            <ShopInfo photo={shopPhoto} />
            <ShopFilter apdateTemp={apdateTemp} apdateFilter={apdateFilter}/>
            <ShopProduct data={data} getIdItem={getIdItem}/>            
        </>
    )
}

export default ShopPage;