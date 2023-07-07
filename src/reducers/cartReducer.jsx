export const cartInitialState = []

export const CART_ATION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'

}

// update localStorage when cart changes
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ATION_TYPES.ADD_TO_CART:{
      const id = actionPayload.id
      // Check if product is already in cart
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      // If product is not in cart, add it

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case CART_ATION_TYPES.REMOVE_FROM_CART:{
      const id = actionPayload.id
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ATION_TYPES.CLEAR_CART:
      updateLocalStorage(cartInitialState)
      return cartInitialState

    default:
      return state
  }
}
