import { Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Home from './home';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* Add other protected routes similarly */}
      </Routes>
    
  );
}

export default App;