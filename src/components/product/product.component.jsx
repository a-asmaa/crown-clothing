import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart } from '../../store/Actions/cartActions';
import { selectCartItems } from '../../store/cartSelector';
import Button from '../Button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product.style.jsx';




function ProductCard({product}) {

    const {name, imageUrl, price} = product;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


    const handleAddToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
        <img src={imageUrl} alt={name} />

        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={handleAddToCart}> ADD TO CART </Button>
    </ProductCardContainer>
  )
}

export default ProductCard