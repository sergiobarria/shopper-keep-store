export enum ActionType {
  PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST',
  PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS',
  PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL',

  PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST',
  PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS',
  PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL',

  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADJUST_QTY = 'ADJUST_QTY',
}