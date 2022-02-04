import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../../action-types';
import { UserDetailsActions } from '../../actions';
import { RootState } from '../../reducers';

export const getUserDetails =
  (id: string) =>
  async (dispatch: Dispatch<UserDetailsActions>, getState: () => RootState) => {
    try {
      dispatch({ type: ActionType.USER_DETAILS_REQUEST });

      const {
        user: { login },
      } = getState();

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${login.user?.token}`,
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
