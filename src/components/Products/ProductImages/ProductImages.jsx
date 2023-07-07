import { useState } from 'react'
import './ProductImages.css'
export default function ProductImages ({ product }) {
  const [imageIndex, setImageIndex] = useState(0)

  const handlePrev = (product) => {
    if (imageIndex === 0) {
      return null
    }
    setImageIndex(imageIndex - 1)
  }
  const handleNext = (product) => {
    if (imageIndex === product.images.length) {
      return null
    }
    setImageIndex(imageIndex + 1)
  }

  return (
    <div className='products-photos'>
      <button className='prev-photo' onClick={() => handlePrev(product)}>←</button>
      <img className='product-photo' src={imageIndex === 0 ? product.thumbnail : product.images[imageIndex - 1]} alt={product.title} loading='lazy' />
      <button className='next-photo' onClick={() => handleNext(product)}>→</button>
    </div>
  )
}
