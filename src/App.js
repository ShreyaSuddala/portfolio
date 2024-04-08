import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Profile from './components/Profile';
import SkillSection from './components/Skill/SkillSection';

function App() {
  useEffect(()=>{
    document.title ="Portfolio"
  },[])
  return (
    < >
     <Navbar/>
     <div className='container' >
     <Profile/>
    <SkillSection/>
     
     </div>
    </>
  );
}

export default App;
