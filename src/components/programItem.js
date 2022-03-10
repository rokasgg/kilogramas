import React, { Component, useState } from "react";
import Plan from '../assets/plan';
import Exercise from '../assets/exercise';
import Shoe from '../assets/shoe';
import Diet from "../assets/diet";
import Whistle from "../assets/whistle";
import Bookcheck from "../assets/bookcheck";
import Smartwatch from "../assets/smartwatch";

const renderSwitch = (param) => {
    switch (param) {
        case 'Plan':
            return <Plan />;

        case 'Exercise':
            return <Exercise />;

        case 'Shoe':
            return <Shoe />;

        case 'Diet':
            return <Diet />;

        case 'Whistle':
            return <Whistle />;

        case 'Smartwatch':
            return <Smartwatch />;

        case 'Bookcheck':
            return <Bookcheck />;
        default:
            return 'foo';
    }
}

const ProgramItem = () => {



    const [programList, setProgramList] = useState([{
        key: '0',
        text1: 'A personalized yoga program',
        text2: 'Completely safe and focused on your key goals',
        type: 'Plan'
    },
    {
        key: '1', text1: 'Easy & enjoyable yoga workouts for your level',
        text2: 'Program adjusts to your level and pace',
        type: 'Exercise'
    },
    {
        key: '2', text1: 'No special preparation needed',
        text2: 'Perfect for begginners! Requires no special preparation or equipment',
        type: 'Shoe'
    },
    {
        key: '3', text1: 'Daily motivation & accountability',
        text2: 'Track your progress, develop a healthy routine, reach goals faster',
        type: 'Diet'
    },
    {
        key: '4', text1: 'Browse from various yoga challenges',
        text2: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
        type: 'Whistle'
    },
    {
        key: '5', text1: 'Easy access on any device',
        text2: 'Do your yoga anywhere across all types of devices',
        type: 'Smartwatch'
    },
    {
        key: '6', text1: 'A complete guide to get started',
        text2: 'Best tips, guidelines, advice, and recommendations for successful practice',
        type: 'Bookcheck'
    },
    ]);


    return (
        <>
            {programList.map((item, key) =>
                <div className='ListItem'>
                    <div className='programIcon'>
                        {renderSwitch(item.type)}</div>
                    <div className='Frame2528'>
                        <a className='Frame2528Item1'>{item.text1}</a>
                        <a className='Frame2528Item2'>{item.text2}</a>
                    </div>
                </div>
            )}

        </>
    )

}

export default ProgramItem;