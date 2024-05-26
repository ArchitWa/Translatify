import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import GetStarted from './components/GetStarted';

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/getStarted' element={<GetStarted />} /> 


      </Routes>
    </Router>
  );
}

export default App;
