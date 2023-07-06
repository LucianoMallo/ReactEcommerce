import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons/Icons.jsx'
import './Cart.css'
import { useCart } from '../../hooks/useCart.jsx'
import CartItem from './CartItem/CartItem.jsx'

export default function Cart () {
  const { cart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} {...product} />
            ))
          }
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>

    </>
  )
}
