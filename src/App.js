
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Footer from './Component/Footer';
import Auth from './Component/Auth';

function App() {
  return (
    <div>
      
   <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Auth />} />
       <Route path="/register" element={<Auth register />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/projects" element={<Projects />} />
       
   </Routes>
   <hr />
   <Footer/>

    </div>

  );
}

export default App;
