import {
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Stack
} from '@mui/material';
import NavBar from './components/UI/NavBar/NavBar.tsx';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks.ts';
import { decodeMessage, encodeMessage } from './store/thunks/messageThunks.ts';
import { selectEncoded } from './store/slices/messageSlice.ts';

const initialState = {
  encoded: '',
  password: '',
  decoded: '',
}

const App = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useAppDispatch();
  const encoded = useAppSelector(selectEncoded);
  // const decoded = useAppSelector(selectDecoded);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickEncode = () => {
    if (!form.password) {
      alert('Password is required');
      return;
    }

    dispatch(encodeMessage({message: form.decoded, password: form.password}));
  };

  const onClickDecoded = () => {
    if (!form.password) {
      alert('Password is required');
      return;
    }

    dispatch(decodeMessage({message: form.encoded, password: form.password}));
  };

  return (
    <>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <main>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2}>
            <FormControl>
              <InputLabel htmlFor="decoded">Decoded</InputLabel>
              <Input
                id="decoded"
                name="decoded"
                value={form.decoded}
                onChange={onChange}
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                value={form.password}
                onChange={onChange}
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="encoded">Encoded</InputLabel>
              <Input
                id="encoded"
                name='encoded'
                value={encoded}
                onChange={onChange}
              />
            </FormControl>
          </Stack>

          <IconButton onClick={onClickDecoded}>
            <ArrowBack />
          </IconButton>

          <IconButton onClick={onClickEncode}>
            <ArrowForward/>
          </IconButton>
        </Container>
      </main>
    </>
  );
};

export default App;

