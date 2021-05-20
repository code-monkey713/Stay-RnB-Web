import "./App.css";
// import { Main } from './layout';
import {
  Home,
  Listing,
  Login,
  Profile,
  Signup,
  RecoverPassword,
  AddListing,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Main } from "./layout";
import { TitleBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <TitleBar />
        <Routes>
          <Route element={<Welcome />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<Main />}>
            <Route path="/listing" element={<Listing />} />
            <Route path="/addlisting" element={<AddListing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recover" element={<RecoverPassword />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
