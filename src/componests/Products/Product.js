import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { img, name, seller, price, stock } = props.productList;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><span>by:</span> {seller}</p>
                <p><span>$</span>{price}</p>
                <p><span>only {stock} left in stock - order soon</span></p>
                <button onClick={() => props.handleAddProduct(props.productList)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to card
                </button>
            </div>
        </div>
    );
};

export default Product;
