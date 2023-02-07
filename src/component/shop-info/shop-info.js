import darkLogo from '../../image/Logo/DarkBeansLogo.png';

import './shop-info.scss';

function ShopInfo({photo}) {
    return (
        <>
            <main>
                <div className='shop-info'> 
                    <div className='shop-info__photo'>
                        <img src={photo} alt="girl with cup of coffee" />
                    </div>
                    <div className="shop-info__info-wrapper">
                        <h2>About our beans</h2>
                        <span><img src={darkLogo} alt="coffee icon" /></span>
                        <div className='shop-info__info'>
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            </p>
                            <p >
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. 
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='shop-info__line'></div>
            </main>
            
        </>
    );
}

export default ShopInfo;