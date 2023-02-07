import { Component } from 'react';

import './shop-filter.scss';

class ShopFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            filter: 'all',

            
        }
    }

    apdateTemp = (e) => {
        const temp = e.target.value;
        this.setState({temp});
        this.props.apdateTemp(temp);

    }

    render() {

        const filters = [
            {filter: 'all'},
            {filter: 'Brazil'},
            {filter: 'Kenia'},
            {filter: 'Italy'},
        ]
        return (
            <div className="filter-wrapper">
                <div className="input-filter">
                    <label htmlFor="filter-input">Lookiing for</label>
                    <input type="text" 
                            placeholder="start typing here..." 
                            id="filter-input"
                            onChange={this.apdateTemp}/>
                </div>
    
                <div className="buttons-filter">
                    <span>Or filter</span>
                    <button className='filter-button 'name={'all'} onClick={() => this.props.apdateFilter(filters[0].filter)}>All</button>
                    <button className='filter-button 'name={'Brazil'} onClick={() => this.props.apdateFilter(filters[1].filter)}>Brazil</button>
                    <button className='filter-button'name={'Kenia'} onClick={() => this.props.apdateFilter(filters[2].filter)}>Kenia</button>
                    <button className='filter-button'name={'Italy'} onClick={() => this.props.apdateFilter(filters[3].filter)}>Italy</button>
                </div>
            </div>
        )
    }
    
}

export default ShopFilter;