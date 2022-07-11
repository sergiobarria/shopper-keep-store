import { CartItem } from '../../types';
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

export type CartActions =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | AdjustQtyAction;
