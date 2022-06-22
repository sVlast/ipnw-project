import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { appRoutes } from './app-routes';
import { HomePage } from '../pages/HomePage';
import { FormPage } from '../pages/FormPage';
import { Header } from './Header';
import { ImageGaleryPage } from '../pages/ImageGaleryPage';
import { ListPage } from '../pages/ListPage';
import { SettingsPage } from '../pages/SettingsPage';

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={appRoutes.landing} />}></Route>
        <Route path={appRoutes.landing} element={<HomePage />} />
        <Route path={appRoutes.contactForm} element={<FormPage />} />
        <Route path={appRoutes.imageGalery} element={<ImageGaleryPage />} />
        <Route path={appRoutes.list} element={<ListPage />} />
        <Route path={appRoutes.settings} element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
