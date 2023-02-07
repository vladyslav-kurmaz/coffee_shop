import OffersItem from "../offers-item/offers-item";

import MaskGroup from '../../image/best-goods/Mask_group.jpg'

import './offers.scss'

function Offers({data}) {

    return (
        <div className="offers">
            <img src={MaskGroup} alt="background"/>
            <h2 className="offers__title">Our best</h2>
            <ul className="offers__list">
                <OffersItem data={data}/>
            </ul>
        </div>        
    )
}

export default Offers;