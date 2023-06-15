import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BirdPage from './components/BirdPage';
import BirdDetail from './components/BirdDetail';
import './App.css';
function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/:id" element={<BirdDetail />} />
          <Route path="/" element={<BirdPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
