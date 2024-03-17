import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppContext from '../AppContext';

const SubTopicPage = () => {
    const { subtopicId } = useParams();
    const location = useLocation(); // get params from Link element
    const { clickedContent } = location.state || {}; // get clicked content from location state
    const topicContents = useContext(AppContext);

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

        if (clickedContent !== undefined) {
            const index = topicContents[subtopicId].indexOf(clickedContent);
            scrollToElement(`section${index + 1}`);
        } else {
            window.scrollTo(0, 0); // else just scroll to top of page
        }
    }, [subtopicId, clickedContent, topicContents]);

    // TODO: remove section placeholders with actual content
    return (
        <div style={subTopic_style}>
            <div id="top" className='h1 mt-10 mb-20'>{subtopicId}</div>
            <div id="section1" style={{ ...section_style, background: '#f1f0f4' }}>
                Section 1
            </div>
            <div id="section2" style={section_style}>
                Section 2
            </div>
            <div id="section3" style={{ ...section_style, background: '#f1f0f4' }}>
                Section 3
            </div>
        </div>
    );
};

// helping function: scrolls to element by id
function scrollToElement(sectionId) {
    const elem = document.getElementById(sectionId);
    elem.scrollIntoView({ behavior: 'smooth' });
};

// styles
const subTopic_style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
const section_style = {
    minHeight: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export default SubTopicPage;