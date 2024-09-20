import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { colors } from '@mui/material';
import { styled } from '@mui/material';




const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.green[200],
    },
  },
});


export const Login=()=> {
//   const{Login}=useAuth()
  const handleSubmit = async (event) => {
    event.preventDefault();
};

  return (
    <Container  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <CssTextField
            margin="normal"
            required
            fullWidth
            id="username"
            placeholder="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            bgcolor="grey"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,background:"grey"}}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>   
  );
}