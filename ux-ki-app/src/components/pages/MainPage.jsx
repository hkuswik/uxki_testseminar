import React, { useContext } from 'react';
import SubTopic from '../SubTopic';
import AppContext from '../AppContext';

const MainPage = () => {
    const topicContents = useContext(AppContext);
    const topicNames = Object.keys(topicContents);

    let toTopBtn = document.getElementById("toTopBtn");
    // show toTopBtn when user scrolls down 20px
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    return (
        <div className='Mainpage flex flex-col items-center'>
            <div className='self-center h1 mt-20 mb-20'>Der EU AI Act</div>
            <div className='mb-20' style={item_row}>
                <SubTopic topicName={topicNames[0]} />
                <SubTopic topicName={topicNames[1]} />
                <SubTopic topicName={topicNames[2]} />
                <SubTopic topicName={topicNames[3]} />
            </div>
            <button onClick={() => toTopFunction()} id="toTopBtn">Top</button>
        </div>
    );
};

// helper function: scrolls smoothly to top
function toTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// styles
const item_row = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1000px'
};

export default MainPage;