import './App.css';
// import { Main } from './layout';
import { Home, Listing, Login, Profile, Signup, RecoverPassword } from './pages';
import { NavTabs, TitleBar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <TitleBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover" element={<RecoverPassword />} />
        </Routes>
      </div>
      <NavTabs />
    </BrowserRouter>
  );
};

export default App;
