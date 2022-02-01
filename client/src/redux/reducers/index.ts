import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './products.reducers';

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
