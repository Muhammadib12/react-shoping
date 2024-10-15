import React from 'react'
import "../../css/Filter/Filter.css";
import Bounce from 'react-reveal/Bounce';
function Filter(props) {
    
    return (
    <Bounce top cascade>
    <div className="filter-wrapper">
        <h2 className='filter-title'> Filter</h2>
        <div className='num-of-products'>
            Number of Products: {props.productsNumber} Products
        </div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select value={props.size} className='filter-select' onChange={props.handleFilterBySize}>
                <option value="ALL">ALL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XXL">XXL</option>
                
            </select>
        </div>
        <div className='filter-by-size'>
            <span>Order</span>
            <select value={props.sort} className='filter-select' onChange={props.handleFilterBySort}>
                <option value="latest">Latest</option>
                <option value="lower">Lower</option>
                <option value="highest">Highest</option>                
            </select>
        </div>
    </div>
    </Bounce>
)
}

export default Filter;
