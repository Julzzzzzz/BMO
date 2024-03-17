import React from 'react'
import AddUser from './AddUser'

export default function NewUser() {
  function addUserToLocalStorage(username, password, role) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(existingUsers));
  }

  return (
    <div>
      <h2>Add New User</h2>
      <NewUserForm addUser={addUserToLocalStorage} />
    </div>
  );
}

