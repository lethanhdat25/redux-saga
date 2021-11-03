import { makeStyles, Paper, Typography } from '@mui/material';
import * as React from 'react';

const useStyles=makeStyles((theme) => ({
  root: {

  },
}))
export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  const classes= useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography component="h5">Student Management</Typography>
      </Paper>
    </div>
  );
}
