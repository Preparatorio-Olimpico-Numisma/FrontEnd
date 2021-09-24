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
