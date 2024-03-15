import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SubTopicPage = () => {
    const { subtopicId } = useParams();
    console.log('id: ', subtopicId);

    useEffect(() => {
        switch (subtopicId) {
            case "Einleitung":
                // TODO: set content
                break;
            case "Risikostufen":
                // TODO: set content
                break;
            case "Designimplikationen":
                // TODO: set content
                break;
            default:
                console.log("wrong SubTopic ID");
        };

        window.scrollTo(0, 0); // scroll to top of the page when component mounts
    }, [subtopicId]);

    return (
        <div style={subTopic_style}>
            <div id="top" className='h1 mt-10 mb-20'>{subtopicId}</div>
            <div id="section1" style={{ ...section_style, background: '#f1f0f4' }}>Section 1</div>
            <div id="section2" style={section_style}>Section 2</div>
            <div id="section3" style={{ ...section_style, background: '#f1f0f4' }}>Section 3</div>
        </div>
    );
};

/* function scrollToElement(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: 'smooth' });
} */

const subTopic_style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const section_style = {
    minHeight: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

export default SubTopicPage;