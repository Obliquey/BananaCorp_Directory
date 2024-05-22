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
          <Routes>
            <Route path="/profile" element={ <Profile user={user}/> } />
            <Route path="/directory" element={ <Home /> } />
          </Routes> 
          :
          <Welcome setUser={setUser}/>
        }
        {/* {
          user || <Welcome setUser={setUser}/>
        } */}
      </Router>
    </>
  )
}

export default App

{/* Components that we want:
      1. Login / Registration Page
        - Registration will have a secondary view for inputing employee information(name, job title, etc)
        - Login I guess will have Email & password, though I have no idea how to do that
      2. Navbar (though it will only have links to Personal Profile and Search Directrory)
        - Maybe we throw in a view to allow employees to see their teams too?
      3. Personal Profile
        - Using user ID, display their current information.
        - Maybe this is where we show team info too, & if the user is a manager, we show team salaries?
      4. Employee cards to show information. 
        - Make them clickable to then display more info?
*/}