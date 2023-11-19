import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import NotFound from './pages/NotFound';
import Login from './Components/Login/Login';
import ShowDatas from './pages/ShowDatas';
import Detail from './Components/ShowData/Detail';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<ShowDatas />} />
          <Route path="/movie/:title" element={<Detail />} />
          <Route path="/tv" element={<ShowDatas />} />
          <Route path="/tv/:title" element={<Detail />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
