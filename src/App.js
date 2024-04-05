import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbar';

function App() {
  useEffect(()=>{
    document.title ="Portfolio"
  },[])
  return (
    <div >
     <Navbar/>
    </div>
  );
}

export default App;
