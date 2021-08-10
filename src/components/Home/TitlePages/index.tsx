import './styles.scss';

interface TitleProps {
  children: string;
  color?: string;
}

export function Title(props: TitleProps) {
  return (
    <header className='Title'>
      {props.color ? (
        <h1 style={{ color: props.color }}>{props.children}</h1>
      ) : (
        <h1>{props.children}</h1>
      )}

      <div></div>
    </header>
  );
}
