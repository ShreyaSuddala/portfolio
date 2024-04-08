import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Profile from './components/Profile';

function App() {
  useEffect(()=>{
    document.title ="Portfolio"
  },[])
  return (
    < >
     <Navbar/>
     <div className='container' >

     <Profile/>
     </div>
    </>
  );
}

export default App;
