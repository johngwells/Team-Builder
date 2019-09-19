import React, { useState } from 'react';
import './App.css';
import MembersForm from './MembersForm/MembersForm';

function App() {
  const [card, setCard] = useState({});
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <MembersForm />
      </header>
    </div>
  );
}

export default App;
