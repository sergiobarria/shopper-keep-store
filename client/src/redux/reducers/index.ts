import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './product';
import { cartReducer } from './cart';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './user';

const productReducer = combineReducers({
  list: productListReducer,
  details: productDetailsReducer,
});

const userReducer = combineReducers({
  register: userRegisterReducer,
  login: userLoginReducer,
  details: userDetailsReducer,
  update: userUpdateProfileReducer,
});

const reducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
