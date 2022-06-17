import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Locations from './components/Locations';
import Login from './components/Login';
import Services from './components/Services';
import SignUp from './components/SignUp';
import NavbarB from './layouts/navbar';
import './assets/css/home-style.css'
import './assets/css/locations-style.css'
import BecomeTaskerDatos from './components/BecomeTaskerDatos';
import LogInorSignIn from './components/LogInorSignIn';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarB/>}>
              <Route index element={ <Home/> } />
              <Route path='Locations' element={ <Locations/> } />
              <Route path='Services' element={ <Services/> } />
              <Route path='SignUp' element={ <SignUp/> } />
              <Route path='Login' element={ <Login/> } />
              <Route path='BecomeTaskerDatos' element={ <BecomeTaskerDatos/> } />
              <Route path='LogInorSignIn' element={ <LogInorSignIn/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
