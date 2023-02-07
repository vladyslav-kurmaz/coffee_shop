
import OffersItem from '../offers-item/offers-item';


import './shop-product.scss';

function ShopProduct({data, getIdItem}) {
    return (
        <div className='products'>
            <ul >
                <OffersItem classNames={'shop__offers'} 
                            data={data} 
                            getIdItem={getIdItem}/>                
            </ul>
        </div>
    )
}

export default ShopProduct;