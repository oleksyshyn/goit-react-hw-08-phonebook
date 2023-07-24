import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/Navigation/Navigation'; 
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header style={{backgroundColor: blue}}>
            <Paper elevation={3}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} 
                    padding={2}
                >
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Box>
            </Paper>
        </header>
    )
}
 
export default Header;