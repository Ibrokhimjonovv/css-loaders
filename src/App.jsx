import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import "./App.css";
import LeftMenu from './components/left-menu/left-menu';
import Header from './components/header/header';
import YandexAd from './components/yandexAd/ad';
import NotFound from './pages/not-found/not-found';
import Loaders from './pages/loaders/loaders';
function App() {
  return (
    <BrowserRouter>
      <YandexAd blockId="R-A-17245616-3" type="floorAd" platform="touch" />
      <YandexAd blockId="R-A-17245616-4" type="floorAd" platform="desktop" />

      <YandexAd blockId="R-A-17245616-5" type="topAd" />
      <YandexAd blockId="R-A-17245616-6" type="fullscreen" platform="desktop" />
      <div className="container">
        <div className="for-left-menu">
          <LeftMenu />
        </div>
        <div className="app-menu">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type" element={<Loaders />} />
            {/* {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))} */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
