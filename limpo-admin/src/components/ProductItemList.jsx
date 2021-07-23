import React from 'react';
import ProductItem from './fragments/ProductItem';

const ProductItemList = (props) => {
    let { items } = props
    console.log(items)
    let ItemList = items.map((item, index) => {
        return <ProductItem item={item} index={index} />
    })
    console.log(ItemList)
    return (ItemList)
}

export default ProductItemList;