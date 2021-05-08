import './App.css';
import { Main } from './layout';
import { Home, Listing, Login, Profile, Signup } from './pages';
import { NavTabs, TitleBar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <TitleBar />
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
