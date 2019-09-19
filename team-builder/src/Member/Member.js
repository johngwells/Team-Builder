import React from 'react';

const Member = (props) => {
  console.log(props);
  return (
    <div className='member-container'>
        {props.card.map(member => (
          <div className='member-wrapper'>
          <div className='member-card' key={member.id}>
            <img alt="robot" src={`https://robohash.org/${member.email}?set=set1&size=180x180`}/>
            <div className='member-text'><strong>{member.name}</strong></div>
            <div className='member-text'>{member.role}</div>
            <div className='member-text'>{member.email}</div>
            <button>Purchase This Robot</button>
          </div>
          </div>
        ))}
      </div>
  );
}

export default Member;