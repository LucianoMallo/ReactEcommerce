import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons/Icons.jsx'
import './Cart.css'
import { useCart } from '../../hooks/useCart.jsx'
import CartItem from './CartItem/CartItem.jsx'

export default function Cart () {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <ul>
          {
            cart.map(product => (

              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>

      </aside>

    </>
  )
}
