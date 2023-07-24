import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const AuthNav = () => {
    return (
        <Box 
            sx={{display: 'flex'}}
            gap={2}
        >
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
        </Box>
    )  
}

export default AuthNav;