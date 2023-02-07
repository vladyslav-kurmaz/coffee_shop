import Header from '../../header/header';
import ShopInfo from '../../shop-info/shop-info';
import ShopProduct from '../../shop-product/shop-product';


import pleasurePhoto from '../../../image/shop/pleasure_page.png'

import './pleasure.scss'

function Pleasure({data}) {
    return (
        <>
            <Header  styleColor={'#fff'} main={false} other={false}/>
            <ShopInfo photo={pleasurePhoto}/>
            <ShopProduct data={data}/>
        </>
    )
}

export default Pleasure;