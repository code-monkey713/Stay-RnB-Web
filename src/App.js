import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { WelcomeNavTabs, TitleBar } from './components';
import { Welcome } from './layout';
import PrivateRoute from './components/PrivateRoute';

import {
  Home,
  Listing,
  Login,
  Profile,
  Signup,
  RecoverPassword,
  Logout,
} from './pages';

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
              <Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/listing">
                  <Listing />
                </Route>
                <PrivateRoute path="/profile">
                  <Profile />
                </PrivateRoute>
                <Route path="/recover">
                  <RecoverPassword />
                </Route>
                <WelcomeNavTabs />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
