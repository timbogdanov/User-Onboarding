import React from 'react'

const Form = (props) => {

  const {
    onInputChange,
    onCheckBoxChange,
    onSubmit,
    values,
    errors,
  } = props

  return (
    <form
      onSubmit={onSubmit}
    >

      <div>
        <p>{errors.name}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.terms}</p>
      </div>

      <input
        type='text'
        name='name'
        placeholder='Name'
        onChange={onInputChange}
        value={values.name}
      />

      <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={onInputChange}
        value={values.email}

      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={onInputChange}
        value={values.password}
      />

      <input
        type='checkbox'
        name='terms'
        id='terms'
        onChange={onCheckBoxChange}
        value={values.terms}
      />
      <label htmlFor='terms'>Agree to Terms of Service</label>

      <input
        type='submit'
      />
    </form>
  )
}

export default Form