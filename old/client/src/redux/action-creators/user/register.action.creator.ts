import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { UserLoginActions, UserRegisterActions } from '../../actions';

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
