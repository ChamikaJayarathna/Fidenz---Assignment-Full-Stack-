import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleCard from './components/SingleCard';
import Layout from './Layout/Layout';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login';

const App = () => {

  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="*" element={<Login />} />
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleCard />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;