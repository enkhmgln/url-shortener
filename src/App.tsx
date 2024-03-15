import React, { useState, useEffect } from 'react';
import { api } from './axios-instance';

const MyComponent = () => {
  const [users, setUsers] = useState([]);

useEffect( () => {
  api.get(process.env.REACT_APP_API_URL || '').then((res) => {
           setUsers(res.data.users);
           console.log(res.data);
         }).catch((err:any)=> console.log(err))
        
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
