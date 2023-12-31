import cart from '../img/shopping-cart.gif';
import cartStatic from '../img/shopping-cart-30.png';
import { useState } from 'react';

function Cart({animate, value, ...props}) {
    const [hover, setHover] = useState(false);
    return (
        <div {...props} style={{display: 'inline-block'}}>
            <a
                href='/cart'
                className='shopping-cart'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>

                <img src={(hover && animate) ? cart : cartStatic} alt="cart" className='cart-icon'/> 
                <div className='cart-amount'>{value}</div>   
            </a>
        </div>
        
    );
}

export default Cart;