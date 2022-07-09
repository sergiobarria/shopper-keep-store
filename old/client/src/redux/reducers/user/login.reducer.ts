import { ActionType } from '../../action-types';
import { UserLoginActions } from '../../actions';
import { UserState } from '../../../types';

const initialLoginState: UserState = {
  loading: false,
  error: null,
  user: undefined,
};

export const userLoginReducer = (
  state: UserState = initialLoginState,
  action: UserLoginActions
): UserState => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, error: null, user: undefined };
    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, user: undefined };
    case ActionType.USER_LOGOUT:
      return { loading: false, error: null, user: undefined };
    default:
      return state;
  }
};
