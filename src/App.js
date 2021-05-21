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
              <Route component={<Welcome />}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup" component={Signup} />
                <Route path="/listing" component={Listing} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/recover" component={RecoverPassword} />
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
