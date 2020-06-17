import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    password: '',

    terms: false,
  }

  const initialUsers = [
    {
      name: 'Murky',
      email: 'murky@murk.com',
      password: 'murky1999',
    }
  ]

  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState(initialUsers)

  const onInputChange = (event) => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckBoxChange = (event) => {
    const { name, checked } = event.target

    setFormValues({
      ...formValues,
      [name]: checked
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckBoxChange={onCheckBoxChange}
        onSubmit={onSubmit}
        values={formValues}
      />
    </div>
  );
}

export default App;
