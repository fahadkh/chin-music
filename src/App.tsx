import React from 'react';
import './App.css';

import AppBar from './components/application/AppBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar/>
      <div>
        Some cool content
      </div>
    </div>
  );
}

export default App;
