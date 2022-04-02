import React from 'react';
import './Product.css'

const Product = (props) => {
   const {name,img, price, seller, ratings}=props.product

 
  return (
    <div className='product'>
        
        <img src={img} alt="" />  
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p><small>Price: ${price}</small></p>
        <p><small>Seller:{seller}</small></p>
        <p><small>Raitings:{ratings} stars</small></p>
        </div>
        <button className='btn-cart'>Add To Cart</button>
    </div>
  );
};

export default Product;
