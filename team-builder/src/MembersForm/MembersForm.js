import React, { useState } from 'react';

const MembersForm = props => {
  const [member, setMember] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
    setMember({...member, [event.target.name]: event.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: '', role: '' })
    console.log(e);
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name' />
      <input 
        id='name' 
        type='text' 
        name='name' 
        placeholder='name'
        onChange={handleChange} 
      />
      <input 
        id='role' 
        type='text' 
        name='role' 
        placeholder='role'
        onChange={handleChange} 
      />
      <input 
      id='email' 
      type='text' 
      name='email' 
      placeholder='email'
      onChange={handleChange} 
    />
      <button type='submit'>Add Member</button>
    </form>
  );
}

export default MembersForm;