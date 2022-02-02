import {
  ProductListRequestAction,
  ProductListSucessAction,
  ProductListFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
  ProductDetailsFailAction,
} from './products.actions';
import {
  AddItemToCartAction,
  RemoveItemFromCartAction,
  AdjustQtyAction,
} from './cart.actions';

export type ProductsActions =
  | ProductListRequestAction
  | ProductListSucessAction
  | ProductListFailAction;

export type ProductDetailsActions =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;

export type CartActions =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | AdjustQtyAction;
