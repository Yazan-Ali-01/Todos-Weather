import { ReusableFormProps } from '@interfaces/forms';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ReusableForm: React.FC<ReusableFormProps> = ({ fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            variant="outlined"
            type={field.type}
            error={Boolean(errors[field.name])}
            helperText={(errors[field.name]?.message as string) || ''}
            {...register(field.name, field.validationRule)}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ReusableForm;
