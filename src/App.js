import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp.Pages';
import Home from './Pages/Home/Home.Pages.jsx';
import SignIn from './Pages/SignIn/SignIn.Component.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
