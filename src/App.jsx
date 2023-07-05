import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header/Header'
import Products from './components/Products/Products'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, sortProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  const sortedProducts = sortProducts(filteredProducts)

  return (
    <>
      <Header />
      <Products products={sortedProducts} />
      <Footer />
    </>
  )
}

export default App
