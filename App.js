import React from 'react';
import JobList from './JobList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Remote Job Board</h1>
      </header>
      <JobList />
      <footer>© 2024 Remote Jobs</footer>
    </div>
  );
}

export default App;