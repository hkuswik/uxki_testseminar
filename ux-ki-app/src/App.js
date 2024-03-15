import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import SubTopicPage from './components/pages/SubTopicPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="subtopic/:subtopicId" element={<SubTopicPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;