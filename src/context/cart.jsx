import { createContext, useState } from 'react'

// Create cart context
export const CartContext = createContext()

// Provider component

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = product => {
    // Check if product is already in cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // If product is not in cart, add it
    setCart(preState => ([
      ...preState, {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >{children}
    </CartContext.Provider>
  )
}
