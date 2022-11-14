import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import GlobalStyle from './styles/global'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
