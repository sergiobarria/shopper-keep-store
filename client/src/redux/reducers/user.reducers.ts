import { ActionType } from '../action-types';
import {
  UserDetailsActions,
  UserLoginActions,
  UserRegisterActions,
  UserUpdateProfileActions,
} from '../actions';
import { User, UserRegisterInfo } from '../../types';

interface UserLoginState {
  loading?: boolean;
  user?: User | null;
  error?: string | null;
}

const initialLoginState: UserLoginState = {
  loading: false,
  error: null,
  user: null,
};

export const userLoginReducer = (
  state: UserLoginState = initialLoginState,
  action: UserLoginActions
): UserLoginState => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, error: null, user: null };
    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload, user: null };
    case ActionType.USER_LOGOUT:
      return { loading: false, error: null, user: null };
    default:
      return state;
  }
};

interface UserRegisterState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialUserRegisterState = {
  loading: false,
  error: null,
  user: null,
};

export const userRegisterReducer = (
  state: UserRegisterState = initialUserRegisterState,
  action: UserRegisterActions
): UserRegisterState => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { loading: true, error: null, user: null };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};

interface UserProfileState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialUserProfileState = {
  loading: false,
  error: null,
  user: null,
};

export const userDetailsReducer = (
  state: UserProfileState = initialUserProfileState,
  action: UserDetailsActions
): UserProfileState => {
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
