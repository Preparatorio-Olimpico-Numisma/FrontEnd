import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface propsButtons extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean;
  isSuccess?: boolean;
}

export function Button({
  isOutlined = false,
  isSuccess = false,
  ...props
}: propsButtons) {
  return (
    <button
      {...props}
      className={`button ${isOutlined ? 'outlined' : ''} ${
        isSuccess ? 'success' : ''
      }`}
    />
  );
}
