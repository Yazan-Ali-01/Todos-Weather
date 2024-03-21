import { FormField, FormData } from '@interfaces/forms';
import { Grid, Typography } from '@mui/material';
import ReusableForm from '@shared/forms/ReusableForm';
import React from 'react';
const FormFields: FormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    validationRule: {
      required: 'Full name is required'
    }
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    validationRule: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid email address'
      }
    }
  },
  {
    name: 'newPassword',
    type: 'password',
    label: 'New Password',
    validationRule: {
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long'
      }
    }
  }
];

function App() {
  const handleSubmit = async (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <Typography variant="h2" textAlign="center">
        This is A Reusable Form!
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <ReusableForm fields={FormFields} onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
