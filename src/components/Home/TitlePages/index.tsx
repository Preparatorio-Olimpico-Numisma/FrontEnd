import './styles.scss';

interface TitleProps {
  children: string;
  color?: string;
}

export function Title({ children, color }: TitleProps) {
  return (
    <header className="Title">
      {/* eslint-disable-next-line */}
      {color ? <h1 style={{ color: color }}>{children}</h1> : <h1>{children}</h1>}
      <div />
    </header>
  );
}
