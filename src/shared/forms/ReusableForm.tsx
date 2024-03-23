import { ReusableFormProps } from '@interfaces/forms';
import React from 'react';
import { useForm, FieldError } from 'react-hook-form';

const ReusableForm: React.FC<ReusableFormProps> = ({
  fields,
  submitButtonText = 'Submit',
  onSubmit
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-2"
    >
      {fields.map((field) => {
        if (typeof field.name === 'undefined') return null;

        const error = errors[field.name];

        const errorMessage: string | undefined = error
          ? (error as FieldError).message || 'Error'
          : undefined;

        return (
          <div key={field.name} className="flex w-full flex-col m-0 p-0">
            <label
              htmlFor={field.name}
              className="mb-1 text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              {...register(field.name, field.validationRule)}
              className={`w-full border px-3 py-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-500`}
              placeholder={field.label}
            />
            {errorMessage && (
              <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        className="mt-4 rounded-lg bg-emerald-500 px-4 py-2  text-white shadow-md hover:bg-emerald-500/90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default ReusableForm;
