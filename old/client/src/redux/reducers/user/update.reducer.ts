import { ActionType } from '../../action-types';
import { UserUpdateProfileActions } from '../../actions';
import { UserRegisterInfo } from '../../../types';

interface UserUpdateProfileState {
  loading: boolean;
  error: string | null;
  success?: boolean;
  user: UserRegisterInfo | null;
}

const initialUserUpdateProfileState = {
  loading: false,
  error: null,
  user: null,
};

export const userUpdateProfileReducer = (
  state: UserUpdateProfileState = initialUserUpdateProfileState,
  action: UserUpdateProfileActions
): UserUpdateProfileState => {
  switch (action.type) {
    case ActionType.USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true, user: action.payload };
    case ActionType.USER_UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
