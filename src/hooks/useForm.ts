/* eslint-disable no-eval */
import { useEffect, useState } from "react";

export type FieldsProps = {
  userPassword: string;
  userEmail: string;
};

type useFormProps = {
  initialValues: FieldsProps;
  validate: (props: FieldsProps) => FieldsProps;
};

type InputProps = React.ChangeEvent<HTMLInputElement>;

export function useForm({ initialValues, validate }: useFormProps) {
  const [errors, setErrors] = useState<FieldsProps>({} as FieldsProps);
  const [values, setValues] = useState(initialValues);
  // eslint-disable-next-line
  useEffect(() => validateValues(values), [values]);

  function handleChange(event: InputProps) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;

    if (fieldName == null) return;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }
  
  function validateValues(values: FieldsProps) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    setErrors,
    handleChange,
  };
}

export function validatePassword(password: string) {
  if (!password.match(/[A-Z]/))
    throw new Error("Sua senha precisa ter pelo menos uma letra maiúscula.");
  if (!password.match(/[a-z]/))
    throw new Error("Sua senha precisa ter pelo menos uma letra minuscula.");
  if (!password.match(/[1-9]/))
    throw new Error("Sua senha precisa ter pelo menos um número.");
  if (!password.match(/[!@#$*&]/))
    throw new Error("Sua senha precisa ter pelo menos um caractere especial.");
  if (password.length < 8)
    throw new Error("Sua senha precisa ter mais de 8 caracteres.");
  return "";
}
