import { ADD_ITEM, DELETE_ITEM } from "../Actions/actionTypes";
const initialState = {
  cartData: [],
  cartTotal: 0
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let cartData = [];
      if (action.pushCurrent) {
        cartData = [...state.cartData]
      }
      cartData.push(...action.payLoad)
      let cartTotal = 0
      cartData.forEach(item => {
        cartTotal = cartTotal+item.price
      })
      
      return {
        ...state,
        cartData,
        cartTotal
      };
    case DELETE_ITEM:
      const cartItems = state.cartData.filter((cartItem) => {
        return cartItem.id !== action.payLoad
      })
      return {
        ...state,
        cartData: [...cartItems]
      };
    default:
      return state;
  }
};
