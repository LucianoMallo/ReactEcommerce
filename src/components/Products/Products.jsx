import './Products.css'
import { AddToCartIcon } from '../Icons/Icons'

export default function Products ({ products }) {
  const productsToShow = 10
  return (
    <main className='products'>
      <ul>
        {
            products.slice(0, productsToShow).map(product => (
              <li key={product.id}>
                <div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div>
                  <div>{product.title} - $ {product.price}</div>
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            ))
        }
      </ul>
    </main>
  )
}
