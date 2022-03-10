import React, { Component, useState } from "react";
import Star from "../assets/star";




const OurClients = () => {



    const [clientList, setClients] = useState([{
        key: '0',
        name: 'Emily',
        age: '28',
        city: 'Delaware',
        state: 'NJ',
        stars: '5',
        image: require('../assets/client1.png'),
        review: 'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.'
    },
    {
        key: '1',
        name: 'Kylie',
        age: '40',
        city: 'Los Angeles',
        state: 'CA',
        stars: '5',
        image: require('../assets/client2.png'),
        review: 'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.'
    },
    {
        key: '2',
        name: 'Jesica',
        age: '51',
        city: 'San Francisco',
        state: 'CA',
        stars: '5',
        image: require('../assets/client3.png'),
        review: 'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.        '
    },

    ]);


    return (
        <>
            <div className='ClientBox'>
                <div className="ClientTitleBox"><a className="ClientBoxTitle">Hear success stories from our clients</a></div>
                <div className="Frame3068">
                    {clientList.map((item, key) =>

                        <div className="Frame3068Item">
                            <div className="Frame2702">
                                <div className="Frame2704">
                                    <div className="UserInfo">
                                        <a className="ClienName">{`${item.name}, ${item.age}`}</a>
                                        <a className="ClientInfo">{`${item.city}, ${item.state}`}</a>
                                    </div>
                                </div>
                                <div className="starList">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <div className="ClientFrame"><img src={item.image} key={item.key} className='ClientImg' /></div>
                                <a className="ClientReview">{item.review}</a>

                            </div>
                        </div>


                    )}
                </div>
            </div>


        </>
    )

}

export default OurClients;