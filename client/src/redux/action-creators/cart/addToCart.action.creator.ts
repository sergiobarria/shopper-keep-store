import axios from 'axios';
import { Dispatch } from 'redux';
import { RootState } from '../../reducers';
import { ActionType } from '../../action-types';
import { CartActions } from '../../actions';

export const addToCart =
  (id: string, qty: number) =>
  async (dispatch: Dispatch<CartActions>, getState: () => RootState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: {
        id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
