import StarFill from '../../assets/images/StarFill.svg';
import StarFillNone from '../../assets/images/StarFillNone.svg';
import ArrowRight from '../../assets/images/arrow-right.svg'

import './styles.scss';

type CardProps = {
  imageCard: string;
  Stars: number;
  Avaliation: number;
  Curse: string;
  Author: string;
  className?: string;
};

type CardSquadProps = {
  imageCard: string;
  name: string;
  descrition: string;
};

export function Card({
  imageCard,
  Stars,
  Avaliation,
  Curse,
  Author,
  className,
}: CardProps) {
  return (
    <div className={`card ${className ? className : ''}`}>
      <div className='cardContent'>
        <div className='cardImage'>
          <img src={imageCard} alt='imageCard' />
        </div>
        
        <div className='Star'>
          <img src={Stars > 0 ? StarFill : StarFillNone} alt='Star' />
          <img src={Stars > 1 ? StarFill : StarFillNone} alt='Star' />
          <img src={Stars > 2 ? StarFill : StarFillNone} alt='Star' />
          <img src={Stars > 3 ? StarFill : StarFillNone} alt='Star' />
          <img src={Stars > 4 ? StarFill : StarFillNone} alt='Star' />
        </div>
        
        <p>
          {Avaliation > 1
            ? `${Avaliation} avaliações`
            : `${Avaliation} avaliação`}{' '}
        </p>
        
        <h1>
          <strong>{Curse}</strong>
          {Author}
        </h1>
      </div>
    </div>
  );
}

export function CardSquad(props: CardSquadProps) {
  return (
    <div className='card'>
      <div className='cardContent'>
        <div>
          <h1>{props.name}</h1>
        </div>
        <div className='cardImage SquadImageContainer'>
          <div className='SquadImageItem'>
            <img src={props.imageCard} alt={props.name} />
          </div>
        </div>
        <div className='Description'>
          <p>{props.descrition}</p>
          <img src={ArrowRight} alt='>>'/>
        </div>
      </div>
    </div>
  );
}
