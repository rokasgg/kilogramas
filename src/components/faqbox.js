import React, { Component, useState } from "react";
import ExpandMore from "../assets/expandmore";
import ExpandLess from "../assets/expand_less";


const Faqbox = () => {


    const [faqList, setFaq] = useState([{
        key: '0',
        question: 'What happens after I order?',
        opened: true,
        answer: "After you place your order, we get to work! \n Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
    },
    {
        key: '1',
        opened: false,
        question: 'Where I can access my plan?',
        answer: 'After you place your order, we get to work!  Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. '
    },
    {
        key: '2',
        opened: false,
        question: 'How can I cancel my subscription?',
        answer: 'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. '
    },
    {
        key: '3',
        opened: false,
        question: 'Why this program is paid?',
        answer: 'Somebody needs to make money... Duh... '
    },
    ]);

    const openAnswer = (item, key) => {
        let oldFaq = Array.from(faqList);
        if (oldFaq[key].opened)
            oldFaq[key].opened = false;
        else
            oldFaq[key].opened = true;

        setFaq(oldFaq);
    }


    return (
        <>
            <div className='FaqBox'>
                <a className="FaqTitle">Frequently Asked Questions</a>

                {faqList.map((item, key) =>
                    <div className="FaqItem">
                        <div className="Frame2654" onClick={() => openAnswer(item, key)}><a className="Frame2654Text"> {item.question}</a>{item.opened ? <ExpandLess /> : < ExpandMore />}</div>
                        {item.opened ? <div className="Frame2653"><a className="Frame2653Text"> {item.answer} </a></div> : ''}

                    </div>
                )}
            </div>
        </>
    )
}

export default Faqbox;