import { NavLink } from 'react-router-dom';
import { useAuth } from "hooks/index";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box
            sx={{ display: 'flex' }}
            gap={2}
        >
            <StyledLink to="/">Home</StyledLink>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </Box>
    )  
}

export default Navigation;
