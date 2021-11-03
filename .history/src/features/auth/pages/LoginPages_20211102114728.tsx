import { Box, Button, makeStyles, Paper, Typography } from '@mui/material';
import * as React from 'react';

const useStyles=makeStyles((theme:any) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:'100vh'
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
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
