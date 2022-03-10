import './App.css';
import React, { useState } from 'react';
import Discount from './assets/discount';
import image48 from './assets/image 48.png';
import YogaLogo from './assets/yogalogo';
import ProgramItem from './components/programItem';
import OurClients from './components/ourClients';
import Faqbox from './components/faqbox';
import Plans from './components/plans';
import Programs from './components/programs';


function App() {
  return (
    <div className="App">
      <div className='stickyDiscountBox' ><div className='sticky-items'><Discount />50% discount only valid for 00:15:49</div></div>
      <div id='logoBox'><YogaLogo /></div>
      <header className="Content">
        <Programs />
        <OurClients />
        <button className='getYourPlan'><a className='getYourPlanText'>Get My Plan</a></button>
        {/* <YogaPart /> */}
        <Faqbox />
        <button className='getYourPlan' style={{ order: '5' }}><a className='getYourPlanText'>Get My Plan</a></button>
        {/* <Programs /> */}
      </header>
    </div>
  );
}

export default App;
