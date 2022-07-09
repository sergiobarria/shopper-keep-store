import { ActionType } from '../../action-types';
import { UserDetailsActions } from '../../actions';
import { UserState } from '../../../types';

const initialUserProfileState = {
  loading: false,
  error: null,
  user: undefined,
};

export const userDetailsReducer = (
  state: UserState = initialUserProfileState,
  action: UserDetailsActions
): UserState => {
  switch (action.type) {
    case ActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ActionType.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
