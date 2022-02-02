import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { CartActions } from '../actions';

export const addToCart =
  (id: string, qty: number) => async (dispatch: Dispatch<CartActions>, getState: any) => {
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

export const removeFromCart =
  (id: string) => async (dispatch: Dispatch<CartActions>, getState: any) => {
    dispatch({ type: ActionType.REMOVE_FROM_CART, payload: id });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };

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
