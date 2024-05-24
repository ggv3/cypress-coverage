import React from 'react';
import MyButton from './components/MyButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
      </header>
    </div>
  );
}

export default App;
