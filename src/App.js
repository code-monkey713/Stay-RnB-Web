import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { WelcomeNavTabs } from './components';

import {
  Home,
  Listing,
  Login,
  Profile,
  Signup,
  RecoverPassword,
  Logout,
} from './pages';
// import { Routes, Route } from 'react-router-dom';
import { Welcome, Main } from './layout';
import { TitleBar } from './components';

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <TitleBar />
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route component={<Welcome />}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup" component={Signup} />
                <WelcomeNavTabs />
              </Route>
              <Route component={<Main />}>
                <Route path="/listing" component={<Listing />} />
                <Route path="/profile" component={<Profile />} />
                <Route path="/recover" component={<RecoverPassword />} />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
