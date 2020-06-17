import React from 'react'

const Form = () => {

  return (
    <form>

      <input
        type='text'
        name='name'
        placeholder='Name'
      />

      <input
        type='text'
        name='email'
        placeholder='Email'
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
      />

      <input
        type='checkbox'
        name='terms'
        id='terms'
      />
      <label for='terms'>Agree to Terms of Service</label>

      <input
        type='submit'
      />
    </form>
  )
}

export default Form