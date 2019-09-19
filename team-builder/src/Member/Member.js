import React from 'react';

const Member = (props) => {
  console.log(props);
  return (
    <div>
      {props.card.map(member => (
        <div key={member.id}>
          <div>{member.name}</div>
          <div>{member.role}</div>
          <div>{member.email}</div>
        </div>
      ))}
    </div>
  );
}

export default Member;