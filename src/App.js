import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Banner/Header';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />

        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;


