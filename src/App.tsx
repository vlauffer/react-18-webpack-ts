import React from 'react';
import './App.css'
import MainApp from './components/MainApp';
import TopBar from './components/TopBar';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <MainApp/>
    </div>
  );
}
export default App;