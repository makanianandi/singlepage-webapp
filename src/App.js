// import './App.css';
import {
  BrowserRouter ,
  Route,
  Link,
  Routes,
  } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    
    // <div>
    //     <Header/>
    //     <Router>
    //   <div>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
        
    //   </div>
    // </Router>
    // <Footer/>
    
    //   </div>
  );
}

export default App;


