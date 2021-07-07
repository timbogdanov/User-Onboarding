import React from 'react'

const Form = (props) => {

  const {
    onInputChange,
    onCheckBoxChange,
    onSubmit,
    values,
    errors,
    disabled,
  } = props

  return (
    <form
      onSubmit={onSubmit}
      id='submitForm'
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
        id='name'
        onChange={onInputChange}
        value={values.name}
      />

      <input
        type='text'
        name='email'
        id='email'
        placeholder='Email'
        onChange={onInputChange}
        value={values.email}

      />

      <input
        type='password'
        name='password'
        id='password'
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
        disabled={disabled}
        id='submitBtn'
      />
    </form>
  )
}

export default Form