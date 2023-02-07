import { Component } from 'react';

// import MainPage from '../pages/main_page/main-page';
// import ShopPage from '../pages/shop-page/shop-page';

import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/main_page/main-page';
import Pleasure from '../pages/pleasure/pleasure';
import ShopPage from '../pages/shop-page/shop-page';
import NotFound from '../NotFoud/not-found';
import Items from '../pages/items/items';
import Owerlay from '../owerlay/owerlay';


import solino from '../../image/best-goods/Solino.jpg';
import aromistico from '../../image/best-goods/Aromistico.jpg';
import presto from '../../image/best-goods/presto.jpg';
import starbucks from '../../image/best-goods/Starbucks.jpg';
import blackKult from '../../image/best-goods/Black_kult.jpg';
import lamborghini from '../../image/best-goods/Lamborghini-Espresso.jpg';

import './App.scss';

const dataProduct = [
  {name: 'AROMISTICO Coffee 1 kg', country: 'Italy', price: 10.73, src: aromistico, discribe: 'DARK CHOCOLATE TRUFFLE, CINNAMON & CARAMEL-LIKE With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world.', id: 0},
  {name: 'Solimo Coffee Beans 2 kg', country: 'Brazil', price: 15.99, src: solino, discribe: 'RAINFOREST ALLIANCE CERTIFIED: The coffee we source for this product is Rainforest Alliance Certified, meaning it doesn’t just taste good, it does good too. With every purchase, you’re helping hundreds of farmers and their families across the world, plus, doing your bit for the rainforest too – drink better, do better', id: 1},
  {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 6.99, src: presto, discribe: 'Voted the BEST Coffee Beans 1KG by BBC GoodFood Magazine. We make the perfect Espresso Cup! A rich and smooth blend of Arabica coffee that has notes of Almonds and Chocolate.', id: 2},
  {name: 'Starbucks Holiday Blend', country: 'Kenia', price: 16.45, src: starbucks, discribe: 'STARBUCKS Holiday Blend limited edition whole bean coffee with herbal and sweet maple notes. Bright, lively Latin American beans are combined with the smooth, earthy taste of Indonesian beans. A medium-roast coffee with a layered and balanced flavour. Perfect for the holiday season at home.', id: 3},
  {name: 'Black Kult Roasted Coffee', country: 'Kenia', price: 12.97, src: blackKult, discribe: 'Fresh Spices Roasted Coffee beans - Robusta sourced from Kerala (Idukki). Farm Fresh, Homestead Produce,100% natural with no preservatives. Pure & natural robusta coffee beans with the right aroma and taste. Roasted fresh to ensure optimum flavour and aroma. Well packed. Keep tightly sealed. Store in a cool, dry place out of direct sunlight.', id: 4},
  {name: 'Lamborghini Espresso Red Beans 2kg', country: 'Italy', price: 68.75, src: lamborghini, discribe: 'Italian espresso coffee. Made with a lot of passion and experience. Worthy of the big name it bears. Excellent velvety taste, discreet aroma, full body. Blend of 5 different varieties 100% Arabica.', id: 5}
];

const dataGoods = [
  {name: 'AROMISTICO Coffee 1 kg', price: 10.73, src: aromistico, discribe: 'DARK CHOCOLATE TRUFFLE, CINNAMON & CARAMEL-LIKE With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world.', id: 0},
  {name: 'Solimo Coffee Beans 2 kg', price: 15.99, src: solino, discribe: 'RAINFOREST ALLIANCE CERTIFIED: The coffee we source for this product is Rainforest Alliance Certified, meaning it doesn’t just taste good, it does good too. With every purchase, you’re helping hundreds of farmers and their families across the world, plus, doing your bit for the rainforest too – drink better, do better', id: 1},
  {name: 'Lamborghini Espresso Red Beans 2kg', price: 68.75, src: lamborghini, discribe: 'Italian espresso coffee. Made with a lot of passion and experience. Worthy of the big name it bears. Excellent velvety taste, discreet aroma, full body. Blend of 5 different varieties 100% Arabica.', id: 5}
];


 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      itemId: 0,
      temp: '',
      buttonFilter: 'all'
    }
  }
  
  getIdItem = (id) => {
    
    console.log(this.state.itemId);
    return this.setState((state) => {
      return {
        itemId: id
      }
    })

  }

  apdateTemp = (temp) => {
    return this.setState((state) => {
      return {
        temp: temp
      }
    })
  }

  coffeeSearch = (data, temp) => {
    return data.filter(item => {
      return item.name.indexOf(temp) > -1
    })
  }

  apdateFilter = (filter) => {
    return this.setState((state) => {
      return {
        buttonFilter: filter
      }
    })
  }

  countryCoffeeSearch = (data, filter) => {
    switch(filter) {
      case 'Brazil':
          return data.filter(item => item.country === 'Brazil');
      case 'Kenia':
          return data.filter(item => item.country === 'Kenia');
      case 'Italy':
          return data.filter(item => item.country === 'Italy');
      case '':
        return data.filter(item => item);
      default: 
          return data
  }
  }

  render() {
    const visibleData = this.countryCoffeeSearch(this.coffeeSearch(dataProduct, this.state.temp), this.state.buttonFilter);

    return (

      <div className="App">
        <Routes>
          <Route path='/coffee_shop' element={<Owerlay />} >
            <Route index element={<MainPage data={dataGoods} getIdItem={this.getIdItem}/>} />
            <Route path="/coffee_shop/shop" element={<ShopPage data={visibleData} apdateTemp={this.apdateTemp} getIdItem={this.getIdItem} apdateFilter={this.apdateFilter}/>} />
            {/* <Route path="/coffee_shop/foryoupleasure" element={<Pleasure data={visibleData}/>} /> */}
            <Route path="/coffee_shop/shop/coffee" element={<Items data={dataProduct[this.state.itemId]} />} />
            <Route path="/coffee_shop/coffee" element={<Items data={dataProduct[this.state.itemId]} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    );
  }  
}

export default App;
