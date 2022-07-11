import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const cartItems = localStorage.getItem('cartItems');
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const userInfo = localStorage.getItem('user');
const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress');
const shippingAddress = shippingAddressFromStorage
  ? JSON.parse(shippingAddressFromStorage)
  : {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress },
  user: { login: { user: userInfoFromStorage } },
};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
