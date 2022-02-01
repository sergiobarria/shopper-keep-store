import { ActionType } from '../action-types';
import { ProductsActions, ProductDetailsActions } from '../actions';
import { Product } from '../../types';

interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
}

interface ProductState {
  loading: boolean;
  error: string | null;
  product: Product | undefined;
}

const productListInitialState = {
  loading: false,
  error: null,
  products: [],
};

const productDetailInitialState = {
  loading: false,
  error: null,
  product: undefined,
};

export const productListReducer = (
  state: ProductsState = productListInitialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, error: null, products: [] };
    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, error: null, products: action.payload };
    case ActionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state: ProductState = productDetailInitialState,
  action: ProductDetailsActions
): ProductState => {
  switch (action.type) {
    case ActionType.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null, product: undefined };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };
    case ActionType.PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload, product: undefined };
    default:
      return state;
  }
};
