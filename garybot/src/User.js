import React from 'react'

const User = (props) => {
  const { user } = props

  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.password}</div>
      <div>{user.terms}</div>
    </>
  )
}

export default User