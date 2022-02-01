import {
  ProductListRequestAction,
  ProductListSucessAction,
  ProductListFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
  ProductDetailsFailAction,
} from './products.actions';

export type ProductsActions =
  | ProductListRequestAction
  | ProductListSucessAction
  | ProductListFailAction;

export type ProductDetailsActions =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;
