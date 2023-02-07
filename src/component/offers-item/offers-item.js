
import { Link } from 'react-router-dom';
import './offers-item.scss';



function OffersItem({data, classNames, getIdItem}) {
    
    const clazz = classNames ? classNames : 'offers__items';
    let key = 1;    
  
    if (data) {

        const cart = data.map(({src, name, price, country, id}) => {
            const coffeeCountry = country ? <span className='offers__item-country'>{country}</span> : '';    
            
            return (
            
                <li className={clazz}  key={key++} > 
                    <Link to="coffee" id={id} onClick={() => getIdItem(id)} data={name}>   
                                
                        <img src={src} alt={name} />
                        <span>{name}</span>
                        {coffeeCountry}
                        <span>{`${price}$`}</span>
                    </Link>
                </li>
                
            );
        })

        return cart;
    }
    
}

export default OffersItem;