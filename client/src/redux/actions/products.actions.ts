import { ActionType } from '../action-types';
import { Product } from '../../types';

export interface ProductListRequestAction {
  type: ActionType.PRODUCT_LIST_REQUEST;
}

export interface ProductListSucessAction {
  type: ActionType.PRODUCT_LIST_SUCCESS;
  payload: Product[];
}

export interface ProductListFailAction {
  type: ActionType.PRODUCT_LIST_FAIL;
  payload: string;
}

export interface ProductDetailsRequestAction {
  type: ActionType.PRODUCT_DETAILS_REQUEST;
}

export interface ProductDetailsSuccessAction {
  type: ActionType.PRODUCT_DETAILS_SUCCESS;
  payload: Product;
}

export interface ProductDetailsFailAction {
  type: ActionType.PRODUCT_DETAILS_FAIL;
  payload: string;
}
