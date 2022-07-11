import { User, UserRegisterInfo } from '../../types';
import { ActionType } from '../action-types';

// User Login Actions
interface UserLoginRequestAction {
  type: ActionType.USER_LOGIN_REQUEST;
}

interface UserLoginSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: User;
}

interface UserLoginFailAction {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}

interface UserLogoutAction {
  type: ActionType.USER_LOGOUT;
}

// User Register Actions
interface UserRegisterRequestAction {
  type: ActionType.USER_REGISTER_REQUEST;
}

interface UserRegisterSuccessAction {
  type: ActionType.USER_REGISTER_SUCCESS;
  payload: User;
}

interface UserRegisterFailAction {
  type: ActionType.USER_REGISTER_FAIL;
  payload: string;
}

// User Profile Details Actions
interface UserDetailsRequestAction {
  type: ActionType.USER_DETAILS_REQUEST;
  payload?: string;
}

interface UserDetailsSuccessAction {
  type: ActionType.USER_DETAILS_SUCCESS;
  payload: User;
}

interface UserDetailsFailAction {
  type: ActionType.USER_DETAILS_FAIL;
  payload: string;
}

// User Update Profile Details Actions
interface UserUpdateProfileRequestAction {
  type: ActionType.USER_UPDATE_PROFILE_REQUEST;
}

interface UserUpdateProfileSuccessAction {
  type: ActionType.USER_UPDATE_PROFILE_SUCCESS;
  payload: UserRegisterInfo;
}

interface UserUpdateProfileFailAction {
  type: ActionType.USER_UPDATE_PROFILE_FAIL;
  payload: string;
}

interface UserUpdateProfileResetAction {
  type: ActionType.USER_UPDATE_PROFILE_RESET;
}

// User action types
export type UserLoginActions =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction;

export type UserRegisterActions =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction;

export type UserDetailsActions =
  | UserDetailsRequestAction
  | UserDetailsSuccessAction
  | UserDetailsFailAction;

export type UserUpdateProfileActions =
  | UserUpdateProfileRequestAction
  | UserUpdateProfileSuccessAction
  | UserUpdateProfileFailAction
  | UserUpdateProfileResetAction;
