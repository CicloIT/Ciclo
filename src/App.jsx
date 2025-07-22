import { Route, Routes, useLocation } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import DetailedPlansPage from './components/DetailedPlansPage'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { JabaliPage } from './pages/JabaliPage'
import LcGestionPage from './pages/LcGestionPage'
import ServicesExplanation from './components/ServicesExplanation'
import CoursesPromotion from './components/CoursesPromotion'

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/jabali' || location.pathname === '/lcgestion';

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutMe />} />
          <Route path="/planes" element={<DetailedPlansPage />} />
          <Route path='/servicios' element={<ServicesExplanation />} />
          <Route path="/jabali" element={<JabaliPage />} />
          <Route path="/lcgestion" element={<LcGestionPage />} />
          <Route path="/cursos" element={<CoursesPromotion />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
