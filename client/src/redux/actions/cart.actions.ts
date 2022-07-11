import { CartItem, ShippingData } from '../../types';
import { ActionType } from '../action-types';

interface AddItemToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: CartItem;
}

interface RemoveItemFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

interface AdjustQtyAction {
  type: ActionType.ADJUST_QTY;
  payload: {
    id: string;
    qty: number;
  };
}

interface CartSaveShippingAddress {
  type: ActionType.CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingData;
}

export type CartActions =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | AdjustQtyAction
  | CartSaveShippingAddress;
