import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = (props) => {
  // const {handleAddToCart, product} = props;
   const {name,img, price, seller, ratings}=props.product;
   
  return (
    <div className='product'>
        
        <img src={img} alt="" />  
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p><small>Price: ${price}</small></p>
        <p><small>Seller:{seller}</small></p>
        <p><small>Raitings:{ratings} stars</small></p>
        </div>
        <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>
          <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </button>
       
    </div>
  );
};

export default Product;
