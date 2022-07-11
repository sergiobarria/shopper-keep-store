import { ActionType } from '../../action-types';
import { ProductDetailsActions } from '../../actions';
import { Product } from '../../../types';

interface ProductState {
  loading: boolean;
  error: string | null;
  product: Product | undefined;
}

const productDetailInitialState = {
  loading: false,
  error: null,
  product: undefined,
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
