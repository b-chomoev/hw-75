import {
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  Stack
} from '@mui/material';
import NavBar from './components/UI/NavBar/NavBar.tsx';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <main>
        <Container maxWidth='xl'>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <FormControl>
              <InputLabel htmlFor="encoded">Encoded</InputLabel>
              <Input id="encoded" aria-describedby="my-helper-text" />
              <FormHelperText id="encoded-text">Here is going to be your encoded text</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" aria-describedby="my-helper-text" />
              <FormHelperText id="password-text">Here is going to be your password</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="decoded">Decoded</InputLabel>
              <Input id="decoded" aria-describedby="my-helper-text" />
              <FormHelperText id="decoded-text">Here is going to be your decoded text</FormHelperText>
            </FormControl>
          </Stack>

          <IconButton>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <ArrowForward />
          </IconButton>
        </Container>
      </main>
    </>
  );
};

export default App;
