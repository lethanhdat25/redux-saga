import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { login } from '../authSlice';
const useStyles=makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:'100vh'
  },
  box:{
    padding:"24px"
  }
}));
export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  const classes= useStyles();
  const dispatch= useAppDispatch();
  const handleLogin=()=>{
    dispatch(login({
      username: "ledat",
      password: "1234",
    }))
  }
  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.box}>
        <Typography component="h1" variant="h5">Student Management</Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
