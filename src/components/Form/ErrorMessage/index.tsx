import { ReactNode } from 'react';

import './styles.scss';

type ErrorMessageProps = {
  children: ReactNode;
};

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className='error'>{children}</p>;
}
