
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Sepet from './pages/Sepet';
import { StoreProvider } from './context and reducer/StoreContext';


function App() {


  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sepet" element={<Sepet />} />
        </Routes>
      </Router>
    </StoreProvider>

  );
}

export default App
