import { createContext, useState } from 'react'

// Create context
export const FiltersContext = createContext()

// Provider component

export function FiltersProvider ({ children }) {
  // Define context values here
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    orderByPrice: false
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
