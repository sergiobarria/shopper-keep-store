import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { UserLoginActions, UserUpdateProfileActions } from '../../actions';
import { RootState } from '../../reducers';
import { UserRegisterInfo } from '../../../types';

export const updateUserProfile =
  (user: UserRegisterInfo) =>
  async (
    dispatch: Dispatch<UserUpdateProfileActions | UserLoginActions>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: ActionType.USER_UPDATE_PROFILE_REQUEST });

      const {
        user: { login },
      } = getState();

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${login.user?.token}`,
        },
      };

      const { data } = await axios.put('/api/users/profile', user, axiosConfig);

      dispatch({ type: ActionType.USER_UPDATE_PROFILE_SUCCESS, payload: data });

      // This will update all current user data to the recently updated one
      localStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });
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
