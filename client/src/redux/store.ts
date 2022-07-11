import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const cartItems = localStorage.getItem('cartItems');
const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const user = localStorage.getItem('user');
const userInfoFromStorage = user ? JSON.parse(user) : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { user: userInfoFromStorage },
};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
