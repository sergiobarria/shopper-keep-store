import { ActionType } from '../../action-types';
import { UserRegisterActions } from '../../actions';
import { UserState } from '../../../types';

const initialUserRegisterState = {
  loading: false,
  error: null,
  user: undefined,
};

export const userRegisterReducer = (
  state: UserState = initialUserRegisterState,
  action: UserRegisterActions
): UserState => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { loading: true, error: null, user: undefined };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload, user: undefined };
    default:
      return state;
  }
};
