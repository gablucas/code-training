import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Components/Header';
import Projects from './Components/Projects';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/*' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
