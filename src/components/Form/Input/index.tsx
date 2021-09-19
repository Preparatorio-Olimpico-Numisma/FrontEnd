import { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import './styles.scss';

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  altImg?: string;
  img?: string | undefined;
  label: string;
  name: string;
  ContainerClassName?: string;
}

interface InputMaskProps extends InputAttributes {
  InputMaskChange: (value: string) => void;
  mask: 'CPF' | 'CNPJ' | 'CEP' | 'PHONE' | 'DATE';
}

export function Input({
  altImg,
  img,
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
          ? `InputContainer ${ContainerClassName}`
          : 'InputContainer'
      }
    >
      {img && altImg ? (
        <img src={img} alt={altImg} className="ImageInput" />
      ) : (
        ''
      )}
      <div>
        <input ref={inputRef} {...rest} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{label}</label>
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

export function MaskInput({
  InputMaskChange,
  mask,
  altImg,
  img,
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
  }

  return (
    <div
      className={
        ContainerClassName
          ? `InputContainer ${ContainerClassName}`
          : 'InputContainer'
      }
    >
      {img && altImg ? (
        <img src={img} alt={altImg} className="ImageInput" />
      ) : (
        ''
      )}
      <div>
        <input
          ref={inputRef}
          {...rest}
          onChange={(event) => handleTextChange(event.currentTarget.value)}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{label}</label>
      </div>
    </div>
  );
}
