import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthContextProvider } from './contextApi/AuthContext';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider >
          <Routes>
            <Route path="/" element={ <Signup />} />
            <Route path="/signin" element={ <Signin />} />
          </Routes> 
        </AuthContextProvider>
      
      </header>
      
    </div>
  );
}

export default App;
