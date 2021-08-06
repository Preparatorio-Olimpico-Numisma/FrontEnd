/* eslint-disable no-eval */
import { useEffect, useState } from "react";

export type FieldsProps = {
  userEmail: string;
  userPassword: string;
  Cpf?: string;
  Telephone?: string;
  Address?: string;
  Description?: string;
  Avatar?: File;
  UF?: string;
  City?: string;
  Name?: string;
  Family_name?: string;
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

    if (fieldName === null) return;

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
    return "Sua senha precisa ter pelo menos uma letra maiúscula.";
  if (!password.match(/[a-z]/))
    return "Sua senha precisa ter pelo menos uma letra minuscula.";
  if (!password.match(/[1-9]/))
    return "Sua senha precisa ter pelo menos um número.";
  if (!password.match(/[!@#$*&]/))
    return "Sua senha precisa ter pelo menos um caractere especial.";
  if (password.length < 8) return "Sua senha precisa ter mais de 8 caracteres.";
  return "";
}

export const validate_cpf = (strCPF: string) => {
  let Soma;
  let Resto;
  let i;
  Soma = 0;
  strCPF = strCPF.replace(/[^\d]+/g, "");
  if (strCPF === "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + Number(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== Number(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + Number(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== Number(strCPF.substring(10, 11))) return false;
  return true;
};
