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

  const initialDisabled = true

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([response.data, ...users])
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

    Yup
      .reach(formValidation, name)
      .validate(checked)

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

  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formValidation.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        onCheckBoxChange={onCheckBoxChange}
        onSubmit={onSubmit}
        values={formValues}
        errors={formErrors}
        disabled={disabled}
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
