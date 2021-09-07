import { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import './styles.scss';

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  altImg?: string;
  img?: string | undefined;
  label: string;
  name: string;
}

export function Input({ altImg, img, label, name, ...rest }: InputAttributes) {
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
    <div className="InputContainer">
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
