import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './products.reducers';
import { cartReducer } from './cart.reducers';

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
