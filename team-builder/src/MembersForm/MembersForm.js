import React, { useState } from 'react';

const MembersForm = () => {
  const [member, setMember] = useState({});
  return (
    <form>
      <label htmlFor='name' />
      <input id='name' type='text' name='name' placeholder='name' />
    </form>
  );
}

export default MembersForm;