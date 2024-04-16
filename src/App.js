import { useEffect } from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Profile from './components/Profile';
import SkillSection from './components/Skill/SkillSection';
import Workexperience from './components/workexperience/Workexperience';
import Contact from './components/Contact/Contact';

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
    <Workexperience/>
    <Contact/>
     
     </div>
    </>
  );
}

export default App;
