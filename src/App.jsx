import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import "./App.css";
import LeftMenu from './components/left-menu/left-menu';
import Header from './components/header/header';
import NotFound from './pages/not-found/not-found';
import Loaders from './pages/loaders/loaders';
function App() {
  return (
    <BrowserRouter>
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
