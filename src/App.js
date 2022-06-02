import React from 'react';
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Confirmation from './components/Confirmation';
import { UserContextProvider } from './contextApi/AuthContext';

const  App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider >
          <Routes>
            <Route path="/" element={ <Signup />} />
            
            <Route path="/confirmation" element={ <Confirmation />} />
          
          </Routes> 
        </UserContextProvider>
      
      </header>
      
    </div>
  );
}

export default App;
