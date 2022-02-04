import { ActionType } from '../../action-types';
import { ProductsActions } from '../../actions';

import { Product } from '../../../types';

interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
}

const productListInitialState = {
  loading: false,
  error: null,
  products: [],
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
