import React, { useState } from 'react';
import Discount from '../assets/discount';
import image48 from '../assets/image 48.png';
import YogaLogo from '../assets/yogalogo';
import ProgramItem from '../components/programItem';
import OurClients from '../components/ourClients';
import Faqbox from '../components/faqbox';
import Plans from '../components/plans';



const Programs = () => {
    return (
        <>
            <div className='programs-box'>
                <div className='Component1'>
                    <div className='textComp1'> Over <b>52 147</b> plans ordered.</div>
                    <div className='textComp2'>Get access to your yoga program now!</div>
                </div>
                <div className='Component2'>
                    <div className='leftBox'>
                        <div className='Frame3063'>
                            <div className='leftBoxText1'>Choose your plan and get <a style={{ color: '#FF9B4E' }}>7 days free trial</a></div>
                            <Plans />
                            <button className='getYourPlan'><a className='getYourPlanText'>Get Your Plan</a></button>
                            <p className='trialText'>Your free trial will automatically become a paid subscription on the 8th day after you begin your trial. To cancel your subscription, please contact us at least 24 hours before the end of the trial period.</p>
                            <p className='privacyText'>By choosing a payment method you agree to the <a href=''>T&Cs</a> and <a href=''>Privacy Policy</a></p>
                            <img className='Image48' src={image48} alt='bhy' />
                        </div>
                    </div>

                    <div className='rightBox'>
                        <a className='whatsMyProgram'>What's in my program?</a>
                        <div className='Frame3062'>
                            <ProgramItem />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Programs;






