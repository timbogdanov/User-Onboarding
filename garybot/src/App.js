import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import './App.css';
import Form from './Form'
import User from './User'
import formValidation from './formValidation'
import {v4 as uuid} from 'uuid'

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    password: '',

    terms: false,
  }

  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    terms: '',
  }

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = (event) => {
    const { name, value } = event.target

    Yup
      .reach(formValidation, name)
      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })

      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        });
      });

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

    const newUser = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    }

    postNewUser(newUser)
  }

  // useEffect(() => {
  //   getUsers()
  // }, []);


  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckBoxChange={onCheckBoxChange}
        onSubmit={onSubmit}
        values={formValues}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User user={user} key={user.id} />
          )
        })
      }
    </div>
  );
}

export default App;
