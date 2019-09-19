import React, { useState } from 'react';
import './App.css';
import MembersForm from './MembersForm/MembersForm';
import Member from './Member/Member';

function App() {
  const [card, setCard] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    }
    setCard([...card, newMember]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <MembersForm addNewMember={addNewMember} />
        <Member card={card} />
      </header>
    </div>
  );
}

export default App;
