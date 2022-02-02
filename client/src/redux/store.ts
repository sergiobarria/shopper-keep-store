import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const cartItems = localStorage.getItem('cartItems');
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
