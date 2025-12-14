import { BrowserRouter as Router } from 'react-router-dom';

import './bootstrap/bootstrap.min.css';
import './bootstrap/bootstrap.bundle.min.js';
import './App.css';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="app">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
