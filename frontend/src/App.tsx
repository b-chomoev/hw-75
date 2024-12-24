import NavBar from './components/UI/NavBar/NavBar.tsx';
import { CssBaseline } from '@mui/material';
import Cipher from './Containers/Cipher/Cipher.tsx';

const App = () => {

  return (
    <>
      <CssBaseline/>
      <header>
        <NavBar />
      </header>
      <main>
        <Cipher/>
      </main>
    </>
  );
};

export default App;

