import { Title } from '../../../components/Home/TitlePages';
import { CardSquad } from '../../Card';

import imageCard from '../../../assets/images/Wave.svg'

import './styles.scss';

export function Squad() {
  return (
    <div id='Squad'>
      <header className='SquadTopImage'>
        <svg viewBox='0 0 1500 223' fill='none'>
          <path
            d='M-1.5 116.788C-1.5 116.788 51.5 94 174.883 116.788C451.472 148.489 673.561 324.007 1018.96 139.211C1364.35 -45.586 1500 27.5 1500 27.5V0H-1.5'
            fill='white'
          />
        </svg>
      </header>
      <main>
        <Title color='#fff'>Conheça nossa equipe!</Title>
        <div className='CardSquad'>
          <div className='CardItem'>
            <CardSquad key={1} descrition='função' imageCard={imageCard} name='a'/>
            <CardSquad key={2}  descrition='função' imageCard={imageCard} name='a'/>
          </div>
          <div className='CardItem'>
            <CardSquad key={3}  descrition='função' imageCard={imageCard} name='a'/>
            <CardSquad key={4}  descrition='função' imageCard={imageCard} name='a'/>
            <CardSquad key={5}  descrition='função' imageCard={imageCard} name='a'/>
            <CardSquad key={6}  descrition='função' imageCard={imageCard} name='a'/>
          </div>
          <div className='CardItem'>
            <CardSquad key={7}  descrition='função' imageCard={imageCard} name='a'/>
            <CardSquad key={8}  descrition='função' imageCard={imageCard} name='a'/>
          </div>
        </div>
      </main>
    </div>
  );
}
