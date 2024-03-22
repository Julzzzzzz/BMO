import React from 'react'
import '/src/styles/DefaultStyles.css'

export default function UserList() {
  return (
  <>
  <div className='componentContainer'>
    <div>
      <input type='text' placeholder='search user' />
    </div>
      <h2>User1</h2>
      <h2>User2</h2>
  </div>
  </>
  )
}
