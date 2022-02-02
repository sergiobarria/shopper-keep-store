import { CartItem } from '../../types';
import { ActionType } from '../action-types';

export interface AddItemToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveItemFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

export interface AdjustQtyAction {
  type: ActionType.ADJUST_QTY;
  payload: {
    id: string;
    qty: number;
  };
}
