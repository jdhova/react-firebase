import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Signup from './components/Signup';
import Confirmation from './components/Confirmation';
import { AuthContextProvider } from './contextApi/AuthContext';
// import { UserContextProvider } from './contextApi/AuthContext';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <AuthContextProvider >
          <Routes>
            <Route path="/" element={ <Signup />} />
            <Route path="/confirmation" element={ <Confirmation />} />
          
          </Routes> 
        </AuthContextProvider>
      
      </header>
      
    </div>
  );
}

export default App;
