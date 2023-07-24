import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectUser } from "redux/auth/selectors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
            gap={2}
        >
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
            }}
            gap={1}
            >
                <AccountCircleIcon></AccountCircleIcon>
                <Typography variant="body1" component="p">{user.email}</Typography>
            </Box>
            
            <Button variant="outlined" size="small" onClick={onLogout}>Logout</Button>
        </Box>
    )
}

export default UserMenu;