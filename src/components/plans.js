import React, { Component, useState } from "react";
import CheckCircle from "../assets/checked";
import Circle from "../assets/circle";
import ExpandMore from "../assets/expandmore";
import ExpandLess from "../assets/expand_less";





const Plans = () => {



    const [planList, setPlans] = useState([{
        key: '0',
        period: '6',
        amouont: '9.99',
        total: '119.94',
        totalAfterDiscount: '59.94',
        periodText: 'billed every 6 months',
        selected: true,
    },
    {
        key: '1',
        period: '3',
        amouont: '14.99',
        total: '59.97',
        totalAfterDiscount: '44.97',
        periodText: 'billed every 3 months',
        selected: false,
    },
    {
        key: '2',
        period: '1',
        amouont: '19.99',
        // total: '119.94',
        // totalAfterDiscount: '59.94',
        periodText: 'Billed monthly',
        selected: false,
    },

    ]);

    const selectPlan = (item, key) => {
        let oldPlanList = Array.from(planList);

        if (!oldPlanList[key].selected) {
            for (var i = 0; i < oldPlanList.length; i++) {
                oldPlanList[i].selected = false;
            }
            oldPlanList[key].selected = true;

        }

        setPlans(oldPlanList);
    }


    return (
        <>
            <div className='Frame3066'>
                {planList.map((item, key) =>
                    <div className='AnotherBox' onClick={() => selectPlan(item, key)}>
                        <div className={item.selected ? 'planItemSelected' : 'planItem'}>
                            <div className='planContentBox'>

                                <div className='plantLeftContSide'>
                                    <div className='pricesNdiscount'>
                                        <div className='title'>
                                            {`${item.period} month plan`}
                                        </div>
                                    </div>
                                    <div className='prices'>
                                        <div className='Frame2724'><div className='Frame2724text1'>{`$${item.amouont}`}</div><div className='Frame2724text2'>/ month</div></div>
                                        <div className='Frame2724period'>{item.total ? <div className='Frame2724periodtext1'>{`$${item.total}`}</div> : false}<div className='Frame2724periodtext3'><a style={{ color: '#FF9B4E', fontWeight: '700' }}>{item.totalAfterDiscount ? `$${item.totalAfterDiscount}` : false}</a> {`${item.periodText}`}</div></div>
                                    </div>
                                </div>

                                <div className='plantRightContSide'>{item.selected ? <CheckCircle /> : <Circle />}</div>
                            </div>
                        </div>
                    </div>
                )}




            </div>
        </>
    )
}

export default Plans;