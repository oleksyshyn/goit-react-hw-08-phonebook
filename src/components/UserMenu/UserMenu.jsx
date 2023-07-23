import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <div>{user.name}</div>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;