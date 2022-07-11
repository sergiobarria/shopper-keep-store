import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { UserLoginActions } from '../../actions';

export const logout = () => (dispatch: Dispatch<UserLoginActions>) => {
  localStorage.removeItem('user');
  dispatch({ type: ActionType.USER_LOGOUT });
};
