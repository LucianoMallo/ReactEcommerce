import './Footer.css'
// import { useFilters } from '../../hooks/useFilters'
import { useCart } from '../../hooks/useCart'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
            JSON.stringify(filters, null, 2)
        } */}
      {/* {
            JSON.stringify(cart, null, 2)
        } */}
      <div className='footer__container'>
        <div className='footer__container__item'>
          holis
        </div>
      </div>
    </footer>
  )
}
