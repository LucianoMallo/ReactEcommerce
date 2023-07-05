import { Filters } from '../Filters/Filters'

export function Header ({ changeFilter }) {
  return (
    <header className='header'>
      <h1>Shop 🛒</h1>
      <Filters />

    </header>
  )
}
