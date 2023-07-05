import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'

export function Filters ({ changeFilter }) {
  const { filters, setFilters } = useFilters()
  const minPriceFilteredId = useId()
  const categoryFilteredId = useId()

  function handlePriceChange (event) {
    setFilters(preState => (
      {
        ...preState,
        minPrice: event.target.value
      }
    ))
  }

  function handleCategoryChange (event) {
    setFilters(preState => (
      {
        ...preState,
        category: event.target.value
      }
    ))
  }
  function handleSortChange (event) {
    setFilters(preState => (
      {
        ...preState,
        orderByPrice: event.target.checked
      }
    ))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilteredId}>Min.Price</label>
        <input
          type='range'
          id={minPriceFilteredId}
          min='0'
          max='1000'
          onChange={handlePriceChange}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilteredId}>Category</label>
        <select
          id={categoryFilteredId}
          onChange={handleCategoryChange}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
      <div>
        <label htmlFor='orderByPrice'>Sort by price</label>
        <input type='checkbox' onChange={handleSortChange} />

      </div>
    </section>
  )
}
