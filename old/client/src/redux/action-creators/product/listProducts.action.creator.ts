import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { ProductsActions } from '../../actions';

export const listProducts = () => async (dispatch: Dispatch<ProductsActions>) => {
  try {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: ActionType.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: ActionType.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
