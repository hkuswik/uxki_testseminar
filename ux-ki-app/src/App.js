import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import SubTopicPage from './components/pages/SubTopicPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AppContext from './components/AppContext';

const topicContents = {
  Einleitung: ['Einleitungsvideo', 'Was ist der EU AI Act'],
  Risikostufen: ['Video', 'Wie funktionieren Risikostufen', 'Zu beachten bei Risikostufen'],
  Designimplikationen: ['Video', 'Weitergehende Kriterien'],
  Thema: ['Beispiele']
};

function App() {
  return (
    <div className='App'>
      <AppContext.Provider value={topicContents}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="subtopic/:subtopicId" element={<SubTopicPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider >
    </div>
  );
};

export default App;