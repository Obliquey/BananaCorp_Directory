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
  // need to figure out how to use this boolean state to show other routes.
  const [user, setUser] = useState();


  // useEffect(() => {
  // }, [])

  return (
    <>
      <Router>
        {
          user ?
          <>
            <Navbar />
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