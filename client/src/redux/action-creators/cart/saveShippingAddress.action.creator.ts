import { Dispatch } from 'redux';
import { ShippingData } from '../../../types';
import { ActionType } from '../../action-types';
import { CartActions } from '../../actions';

export const saveShippingAddress =
  (data: ShippingData) => (dispatch: Dispatch<CartActions>) => {
    dispatch({ type: ActionType.CART_SAVE_SHIPPING_ADDRESS, payload: data });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
