//import logo from './logo.svg';
import './App.css';
import Isim from './components/Isim';
import Soyisim from './components/Soyisim';
import TelefonNo from './components/TelefonNo';
import KimlikNo from './components/KimlikNo';
import { Container } from '@mui/material';


const App = () => {
  return (
    <Container>
      <h1>Enter Your Name</h1>
     <Isim/>
    
     <h1>Enter Your Surname</h1>
    <Soyisim/>
    
    <h1>Enter Your PhoneNumber</h1>
    <TelefonNo/>
    
    <h1>Enter Your PersonalId</h1>
    <KimlikNo/>
  

    </Container>
  );
};

export default App;

