import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { CartActions } from '../../actions';

export const adjustQty =
  (itemId: string, value: number) => async (dispatch: Dispatch<CartActions>) => {
    dispatch({
      type: ActionType.ADJUST_QTY,
      payload: {
        id: itemId,
        qty: value,
      },
    });
  };
