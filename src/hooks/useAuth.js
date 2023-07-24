import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectIsRefreshing);
    const error = useSelector(selectError);
    
    return {
        isLoggedIn,
        user,
        isRefreshing,
        error,
    };
}