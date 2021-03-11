import { Button, Container, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import firebase from 'firebase';
import React from 'react';

import 'regenerator-runtime';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const Login = (): JSX.Element => {
  const { auth } = useTypedSelector(store => store.authFirebase);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justify="center"
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Login };
