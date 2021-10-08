import {
  useEffect,
  useRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';

import './styles.scss';

type InputAttributes = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  ContainerClassName?: string;
};

export function Input({
  label,
  name,
  ContainerClassName,
  ...rest
}: InputAttributes) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div
      className={
        ContainerClassName
          ? `InputUserContainer ${ContainerClassName}`
          : 'InputUserContainer'
      }
    >
      <div>
        <label htmlFor={label}>{label}</label>
        <input ref={inputRef} {...rest} />
      </div>
    </div>
  );
}

type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
  ContainerClassName?: string;
};
export function TextArea({
  label,
  name,
  ContainerClassName,
  ...rest
}: TextareaAttributes) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div
      className={
        ContainerClassName
          ? `InputUserContainer ${ContainerClassName}`
          : 'InputUserContainer'
      }
    >
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea ref={textareaRef} {...rest} />
      </div>
    </div>
  );
}

function maskCPF(value: string) {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 6) {
    const numbersMask = numbers.replace(/^(\d{3})(\d)/, '$1.$2');
    return numbersMask;
  }

  if (numbers.length < 10) {
    const numbersMask = numbers.replace(/^(\d{3})(\d{3})(\d)/, '$1.$2.$3');
    return numbersMask;
  }

  const numbersMask = numbers.replace(
    /^(\d{3})(\d{3})(\d{3})(\d)/,
    '$1.$2.$3-$4'
  );
  return numbersMask;
}

function maskDate(value: string) {
  const dateNumbers = value.replace(/\D/g, '');
  if (dateNumbers.length > 4) {
    const dateNumbersMask = dateNumbers.replace(
      /(\d{2})(\d{2})(\d)/,
      '$1/$2/$3'
    );
    return dateNumbersMask;
  }
  const dateNumbersMask = dateNumbers.replace(/^(\d{2})(\d)/, '$1/$2');
  return dateNumbersMask;
}

function maskPhone(value: string) {
  const phoneNumbers = value.replace(/\D/g, '');

  if (phoneNumbers.length <= 6) {
    const phoneNumbersMask = phoneNumbers.replace(/^(\d{2})(\d)/, '($1) $2');
    return phoneNumbersMask;
  }

  if (phoneNumbers.length <= 10) {
    const phoneNumbersMask = phoneNumbers.replace(
      /^(\d{2})(\d{4})(\d)/,
      '($1) $2-$3'
    );
    return phoneNumbersMask;
  }

  const phoneNumbersMask = phoneNumbers.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '($1) $2-$3'
  );
  return phoneNumbersMask;
}

interface InputMaskProps extends InputAttributes {
  InputMaskChange: (value: string) => void;
  mask: 'CPF' | 'CNPJ' | 'CEP' | 'PHONE' | 'DATE';
}

export function MaskInput({
  InputMaskChange,
  mask,
  label,
  name,
  ContainerClassName,
  ...rest
}: InputMaskProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleTextChange(text: string) {
    if (mask === 'DATE') InputMaskChange(maskDate(text));
    else InputMaskChange(maskCPF(text));
    if (mask === 'CPF') InputMaskChange(maskCPF(text));
    if (mask === 'CNPJ') InputMaskChange(maskCPF(text));
    if (mask === 'CEP') InputMaskChange(maskCPF(text));
    if (mask === 'PHONE') InputMaskChange(maskPhone(text));
    if (mask === 'DATE') InputMaskChange(maskDate(text));
  }

  return (
    <div
      className={
        ContainerClassName
          ? `InputUserContainer ${ContainerClassName}`
          : 'InputUserContainer'
      }
    >
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          ref={inputRef}
          {...rest}
          onChange={(event) => handleTextChange(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
