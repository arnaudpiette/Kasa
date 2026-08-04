import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Accommodation from '../pages/Accommodation/Accommodation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

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
