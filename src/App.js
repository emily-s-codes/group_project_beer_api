import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/detail/Detail';
import Homepage from './pages/homepage/Homepage';
import Uebersicht from './pages/uebersicht/Uebersicht';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/uebersicht" element={<Uebersicht />} />
          <Route path={`/detail/:beerId`} element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
