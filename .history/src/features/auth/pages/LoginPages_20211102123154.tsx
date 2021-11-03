import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
const useStyles=makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:'100vh'
  }
}));
export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  const classes= useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <Typography component="h1" variant="h5">Student Management</Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
