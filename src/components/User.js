import { useState } from 'react';
const User = ({ name, location }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h2>Location :{location}</h2>
      <h2>
        Count: {count1}, {count2}
      </h2>
      <h3> Contact : djs</h3>
    </div>
  );
};

export default User;
