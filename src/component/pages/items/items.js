import Header from '../../header/header';
// import ShopInfo from '../../shop-info/shop-info';
// import ShopProduct from '../../shop-product/shop-product';

import darkLogo from '../../../image/Logo/DarkBeansLogo.png'

import './items.scss';

function Items({data}) {
    console.log(data);

    return (
        <>
            <Header styleColor={'#fff'} main={false} other={true}/>
            {/* <ShopInfo photo={data[0].src}/> */}
            <div className='item__wrapper'>
                <div className="item__photo">
                    <img src={data.src} alt="photos cofee product" />
                </div>
                <div className="item__info">
                    <h2 className='item__info-title'>{data.name}</h2>
                    <span className='item__info-icon'><img src={darkLogo} alt="coffee icon" /></span>
                    <span className='item__info-country-price'><b>Country:</b> {data.country}</span>
                    <p className='item__info-description'> 
                        <b>Description:</b> {data.discribe}
                    </p>
                    <span className='item__info-country-price'><b>Prise:</b> <span className='item__info-price'>{`${data.price}$`}</span></span>
                </div>
            </div>
            
        </>
    );
}

export default Items;