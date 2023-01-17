import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Header from './Components/Header';
import Projects from './Components/Projects';


function App() {
  return (
    <HashRouter>
    <Header />
      <Routes>
        <Route path='/*' element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
