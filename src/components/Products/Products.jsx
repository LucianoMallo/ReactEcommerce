import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import { useCart } from '../../hooks/useCart'
import ProductImages from './ProductImages/ProductImages'
import { useState } from 'react'

export default function Products ({ products }) {
  const productsToShow = 10
  const { addToCart, removeFromCart, cart } = useCart()
  const [pageOfProducts, setPageOfProducts] = useState(1)
  const [startIndex, endIndex] = [(pageOfProducts - 1) * productsToShow, pageOfProducts * productsToShow]
  const totalPagesOfProducts = Math.round(products.length / productsToShow)

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  if (pageOfProducts > totalPagesOfProducts) setPageOfProducts(1)

  function handlePrev () {
    if (pageOfProducts === 1) {
      return null
    }
    setPageOfProducts(pageOfProducts - 1)
  }
  function handleNext () {
    if (pageOfProducts === products.length / productsToShow) {
      return null
    }

    setPageOfProducts(pageOfProducts + 1)
  }

  return (
    <main className='products'>

      <ul>
        {products.slice(startIndex, endIndex).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <div>{product.title}</div>
              <ProductImages product={product} />
              <div>
                <div>$ {product.price}</div>
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
              <div className='toggle-description'>Description
                <div className='product-description'>
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div>
        <div className='pages-counter'>
          <button className='prev-Pages' onClick={() => handlePrev()}>←</button>
          <div>Page {pageOfProducts} of {totalPagesOfProducts}</div>
          <button className='next-Pages' onClick={() => handleNext()}>→</button>
        </div>
      </div>
    </main>
  )
}
