import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { UserLoginActions } from '../../actions';

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
