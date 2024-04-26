import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Series from './Components/Series/Series';
import Movies from './Components/Movies/Movies'
import config from './config';
import Form from './Components/Form'
import Success from './Components/Success'
import FetchRegistrations from './Components/FetchRegistrations'
import Homepage from './Components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Submissions from './Components/Submissions';
function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<SignUp/>} exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/form" element={<Form/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        {/* <Route path="/submissions" element={<submissions/>}exact/> */}
        <Route path="/Series" element={<Series/>}exact/>
        <Route path="/Movies" element={<Movies/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/Success" element={<Success/>}exact/>
        <Route path="/Homepage" element={<Homepage/>}exact/>
        <Route path="/Submissions" element={<Submissions />}exact />
        <Route path="/Submission/:id" element={<Submissions />}exact />

        
      </Routes>
    </main>
  </React.Fragment>
}


export default App;