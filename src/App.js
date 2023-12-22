import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp.Pages';
import Home from './Pages/Home/Home.Pages.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
