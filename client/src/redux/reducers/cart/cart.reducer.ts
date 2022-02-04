import { CartItem } from '../../../types';
import { ActionType } from '../../action-types';
import { CartActions } from '../../actions';

interface CartState {
  cartItems: CartItem[];
}

const cartInitialState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const newItem = action.payload;

      // If newItem is already in the cart, then replace the old item with new one
      const itemInCart = state.cartItems.find(
        (currentItem) => currentItem.id === newItem.id
      );

      if (itemInCart) {
        return {
          ...state,
          cartItems: [...state.cartItems].map((currentItem) =>
            currentItem.id === newItem.id ? newItem : currentItem
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems].filter((item) => item.id !== action.payload),
      };
    case ActionType.ADJUST_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
        ),
      };
    default:
      return state;
  }
};
