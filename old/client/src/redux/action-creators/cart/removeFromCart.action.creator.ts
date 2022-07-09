import { Dispatch } from 'redux';
import { RootState } from '../../reducers';
import { ActionType } from '../../action-types';
import { CartActions } from '../../actions';

export const removeFromCart =
  (id: string) => async (dispatch: Dispatch<CartActions>, getState: () => RootState) => {
    dispatch({ type: ActionType.REMOVE_FROM_CART, payload: id });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
