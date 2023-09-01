import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/HomePage/Home';
import Details from './components/Details/Details'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreatePokemonForm from './components/CreatePokemonForm/CreatePokemonForm';
// import { Provider } from 'react-redux'; // Importa Provider
// import store from './store'; // Importa tu store

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/create" element={<CreatePokemonForm/>} />
        <Route path="/landing" element={<LandingPage/>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

