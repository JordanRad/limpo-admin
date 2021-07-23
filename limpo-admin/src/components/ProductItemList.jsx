import React from 'react';
import ProductItem from './fragments/ProductItem';

const ProductItemList = (props) => {
    let { items } = props

    let ItemList = items.map((item, index) => <ProductItem item={item} index={index} />)

    return (
        <div style={{ width: "100%" }}>
            <div><u>Включени услуги:</u></div>
            {ItemList}
        </div>
    )
}

export default ProductItemList;