import React from 'react'

const User = (props) => {
  const { user } = props

  const divContainer = {
    background: '#EEEEEE',
    margin: '20px auto',
    padding: '15px 0',
    width: '50%'
  }

  return (
    <div style={divContainer}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.password}</div>
      <div>{user.terms}</div>
    </div>
  )
}

export default User