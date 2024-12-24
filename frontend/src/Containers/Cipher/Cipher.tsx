import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectDecoded, selectEncoded } from './slices/chiperSlice.ts';
import React, { useEffect, useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { decodeMessage, encodeMessage } from './thunks/chiperThunks.ts';

const Cipher = () => {
  const dispatch = useAppDispatch();
  const encodedMessage = useAppSelector(selectEncoded);
  const decodedMessage = useAppSelector(selectDecoded);

  const [form, setForm] = useState({
    encode: '',
    decode: '',
    password: '',
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const encode = async (message: string) => {
    if (message.trim().length > 0 && form.password.trim().length > 0) {
      await dispatch(encodeMessage({message, password: form.password}));
    } else {
      alert('Please enter a message and password');
    }
  };

  const decode = async (message: string) => {
    if (message.trim().length > 0 && form.password.trim().length > 0) {
      await dispatch(decodeMessage({message, password: form.password}));
    } else {
      alert('Please enter a message and password');
    }
  };

  useEffect(() => {
    if (encodedMessage) setForm(prevState => ({...prevState, encode: encodedMessage, decode: '',}));
    if (decodedMessage) setForm(prevState => ({...prevState, decode: decodedMessage, encode: '',}));
  }, [encodedMessage, decodedMessage]);

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid>
            <TextField
              style={{width: '100%'}}
              id="encode"
              name="encode"
              label="Encode Message"
              value={form.encode}
              onChange={inputChangeHandler}
            />
          </Grid>

          <Grid container alignItem="center" direction="row">
            <Grid size={6}>
              <TextField
                style={{width: '100%'}}
                type="password"
                id="password"
                name="password"
                label="Password"
                value={form.password}
                onChange={inputChangeHandler}
              />
            </Grid>

            <Grid size={5}>
              <Button onClick={() => encode(form.encode)} type="button" color="primary" style={{fontSize: '18px'}}>↓</Button>
              <Button onClick={() => decode(form.decode)} type="button" color="primary" style={{fontSize: '18px'}}>↑</Button>
            </Grid>
          </Grid>

          <Grid>
            <TextField
              style={{width: '100%'}}
              id="decode"
              name="decode"
              label="Decode Message"
              value={form.decode}
              onChange={inputChangeHandler}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cipher;