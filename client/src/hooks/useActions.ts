import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  // returns some sort of object containing all action-creators
  return bindActionCreators(actionCreators, dispatch);
};
