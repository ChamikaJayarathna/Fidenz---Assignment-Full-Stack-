import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleCard from './components/SingleCard';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/:id' index element={<SingleCard />} />
      </Route>
    </Routes>
  );
}

export default App;