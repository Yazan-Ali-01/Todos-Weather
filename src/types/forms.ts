/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormField {
  name?: string;
  type?: string;
  label?: string;
  validationRule?: any; // This could be Yup schema if using Formik or validation rules for React Hook Form
}

export interface ReusableFormProps {
  fields: FormField[];
  submitButtonText: string;
  onSubmit: (data: any) => void;
}

export interface FormData {
  name?: string;
  email?: string;
  newPassword?: string;
  location?: string;
}
