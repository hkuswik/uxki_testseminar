import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import exampleImg from '../assets/images/exampleImg.gif';
import { ReactComponent as RightArrow } from '../assets/images/right-arrow.svg';

const topicContents = {
    Einleitung: ['Einleitungsvideo', 'Was ist der EU AI Act'],
    Risikostufen: ['Video', 'Wie funktionieren Risikostufen', 'Zu beachten bei Risikostufen'],
    Designimplikationen: ['Video', 'Weitergehende Kriterien'],
    Thema: ['Beispiele']
}

const SubTopic = ({ topicName }) => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        setContents(topicContents[topicName]);
    }, [topicName]);

    return (
        <Link to={`subtopic/${topicName}`} style={subTopic_style}>
            <div className="img-container h-24 w-full" style={{ background: '#817c9c', borderRadius: '10px 10px 0px 0px' }}>
                <img src={exampleImg} alt="img-placeholder" />
            </div>
            <div className='h2 ml-5 mt-5 mb-5 self-start'>{topicName}</div>
            {contents.map((content, index) => (
                <Link to={`subtopic/${topicName}`} key={index} style={content_style} className='h4 content-link'>
                    {content}
                    <RightArrow className='h-3 w-5' style={{ fill: '#21202b' }} />
                </Link>
            ))}
        </Link>
    );
};

const subTopic_style = {
    background: 'white',
    width: '320px',
    height: '400px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    margin: '20px'
};

const content_style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f1f0f4',
    padding: '10px',
    borderRadius: '10px',
    margin: '10px',
    width: '85%'
};

export default SubTopic;