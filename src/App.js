import React from 'react';

import Menu from './common/Menu/menu'
import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Menu />
    </Router>
  );
}

export default App;