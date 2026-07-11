import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../pages/About';
import Accommodation from '../pages/Accommodation';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Accommodation />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
