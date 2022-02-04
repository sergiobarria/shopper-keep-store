import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import {
  UserDetailsActions,
  UserLoginActions,
  UserRegisterActions,
  UserUpdateProfileActions,
} from '../actions';
import { RootState } from '../reducers';
import { UserRegisterInfo } from '../../types';

export const login =
  (email: string, password: string) => async (dispatch: Dispatch<UserLoginActions>) => {
    try {
      dispatch({ type: ActionType.USER_LOGIN_REQUEST });

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        axiosConfig
      );

      const user = {
        id: data._id,
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
        token: data.token,
      };

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: user });

      localStorage.setItem('user', JSON.stringify(user));
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch: Dispatch<UserLoginActions>) => {
  localStorage.removeItem('user');
  dispatch({ type: ActionType.USER_LOGOUT });
};

export const register =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<UserRegisterActions | UserLoginActions>) => {
    try {
      dispatch({ type: ActionType.USER_REGISTER_REQUEST });

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users',
        { name, email, password },
        axiosConfig
      );

      const user = {
        id: data._id,
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
        token: data.token,
      };

      dispatch({ type: ActionType.USER_REGISTER_SUCCESS, payload: user });

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: user });

      localStorage.setItem('user', JSON.stringify(user));
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails =
  (id: string) =>
  async (dispatch: Dispatch<UserDetailsActions>, getState: () => RootState) => {
    try {
      dispatch({ type: ActionType.USER_DETAILS_REQUEST });

      const {
        userLogin: { user },
      } = getState();

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.get(`/api/users/${id}`, axiosConfig);

      const userData = {
        id: data._id,
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
        token: data.token,
      };

      dispatch({ type: ActionType.USER_DETAILS_SUCCESS, payload: userData });
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUserProfile =
  (user: UserRegisterInfo) =>
  async (dispatch: Dispatch<UserUpdateProfileActions>, getState: () => RootState) => {
    try {
      dispatch({ type: ActionType.USER_UPDATE_PROFILE_REQUEST });

      const {
        userLogin: { user: userInfo },
      } = getState();

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      const { data } = await axios.put('/api/users/profile', user, axiosConfig);

      dispatch({ type: ActionType.USER_UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
