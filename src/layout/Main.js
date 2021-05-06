import { Home, Login, Signup } from '../pages';

export const Main = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Stay RnB</h1>
        <Home />
        <Login />
        <Signup />
      </div>
    </div>
  );
};
