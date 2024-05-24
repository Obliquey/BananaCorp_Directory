import { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/WelcomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import PredictSalary from './components/PredictSalary';

function App() {
  const [user, setUser] = useState();


  return (
    <>
      <Router>
        {
          user ?
          <>
            <Navbar setUser={setUser}/>
            <Routes>
              <Route path="/profile" element={ <Profile user={user}/> } />
              <Route path="/directory" element={ <Home  user={user}/> } />
              <Route path="/calculator" element={ <PredictSalary /> } />
            </Routes> 
          </>
          :
          <Welcome setUser={setUser}/>
        }
      </Router>
    </>
  )
}

export default App;