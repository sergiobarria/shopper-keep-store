import { ActionType } from '../action-types';
import { Product } from '../../types';

interface ProductListRequestAction {
  type: ActionType.PRODUCT_LIST_REQUEST;
}

interface ProductListSucessAction {
  type: ActionType.PRODUCT_LIST_SUCCESS;
  payload: Product[];
}

interface ProductListFailAction {
  type: ActionType.PRODUCT_LIST_FAIL;
  payload: string;
}

interface ProductDetailsRequestAction {
  type: ActionType.PRODUCT_DETAILS_REQUEST;
}

interface ProductDetailsSuccessAction {
  type: ActionType.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

interface ProductDetailsFailAction {
  type: ActionType.PRODUCT_DETAILS_FAIL;
  payload: string;
}

export type ProductsActions =
  | ProductListRequestAction
  | ProductListSucessAction
  | ProductListFailAction;

export type ProductDetailsActions =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;
