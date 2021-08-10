import { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import './styles.scss';

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  altImg?: string;
  img?: string | undefined  ;
  label: string;
  isFile?: boolean;
  name: string;
}

export function Input({
  altImg,
  img,
  label,
  isFile,
  name,
  type,
  required,
  ...rest
}: InputAttributes) {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const { 
    registerField,
    fieldName 
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <div className='InputContainer'>
      {img && altImg ? <img src={img} alt={altImg} /> : ''}
      <div>
        <input ref={inputRef} {...rest} />
        <label>{label}</label>
      </div>
    </div>
  );
}
