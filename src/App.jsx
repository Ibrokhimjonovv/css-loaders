import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Home from './pages/home/home';
import "./App.css";
import LeftMenu from './components/left-menu/left-menu';
import Header from './components/header/header';

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
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
            <Route path="*" element={<h1>404 - Sahifa topilmadi</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
