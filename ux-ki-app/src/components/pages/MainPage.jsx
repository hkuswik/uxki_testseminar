import React from 'react';
import SubTopic from '../SubTopic';

const MainPage = () => {
    return (
        <div className='Mainpage flex flex-col items-center'>
            <div className='self-center h1 mt-20 mb-20'>Der EU AI Act</div>
            <div className='mb-20' style={item_row}>
                <SubTopic topicName={"Einleitung"} />
                <SubTopic topicName={"Risikostufen"} />
                <SubTopic topicName={"Designimplikationen"} />
                <SubTopic topicName={"Thema"} />
            </div>
        </div>
    );
};

const item_row = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1000px'
};

export default MainPage;