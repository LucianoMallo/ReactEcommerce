import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import { useCart } from '../../hooks/useCart'

export default function Products ({ products }) {
  const productsToShow = 10
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.slice(0, productsToShow).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div>
                <div>{product.title} - $ {product.price}</div>
              </div>
              <div>
                <button
                  className={isProductInCart ? 'removeFromCartButton' : 'addToCartButton'} onClick={() => isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)}
                >
                  {isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
