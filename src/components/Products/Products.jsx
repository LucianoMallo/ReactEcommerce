import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import { useCart } from '../../hooks/useCart'
import ProductImages from './ProductImages/ProductImages'

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
              <ProductImages product={product} />
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
