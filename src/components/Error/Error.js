import { useAuth } from 'hooks/index'; 
import { Typography, Button, Box } from '@mui/material';

const Error = () => {
    const { error } = useAuth();


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '7rem',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          marginBottom: '2rem',
        }}
      >
        Something went wrong!
      </Typography>

      {error && (
        <Button
          variant="outlined"
          onClick={() => {
           window.location.reload();
          }}
        >
          Try again
        </Button>
      )}
    </Box>
  );
};

export default Error;
