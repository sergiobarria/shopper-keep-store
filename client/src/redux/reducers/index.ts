import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './products.reducers';
import { cartReducer } from './cart.reducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './user.reducers';

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
