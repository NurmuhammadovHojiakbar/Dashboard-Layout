import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RouteComponents } from './Data/RouteComponents';
import Layout from './Layout/Layout';
import NotFound from './Pages/404/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          RouteComponents.map(c=>(
            <Route path={c.path} element={c.path === "/" ? c.element : <Layout>{c.element}</Layout>} />
          ))
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
