import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {

	const first10 = fakeData.slice(0, 10);
	const [products, setProducts] = useState(first10)

	const [cart, setCart] = useState([]);

	const handleAddProduct = (product) => {
		console.log(product);
		const newCart = [...cart, product];
		setCart(newCart)
	}




	return (
		<div className='Shop-Container'>
			<div className="product-container">
				{
					products.map(pd => <Product
						productList={pd}
						handleAddProduct={handleAddProduct}

					></Product>)
				}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>

		</div>
	);
};

export default Shop;