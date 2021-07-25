import { CardArray } from "./CardArray";
import { Card } from "../Card";

import "./styles.scss";

type CardProps = {
  imageCard: string;
  Author: string;
  Avaliation: number;
  Curse: string;
  Stars: number;
  id: number;
  link: string;
};

export function Carousel() {
  function carouselControl(operator: number) {
    const AllCorousel = document.querySelectorAll(".CorouselItem");
    var i = 0;
    while (AllCorousel.entries().next() && AllCorousel[i]) {
      if (
        AllCorousel[i + operator] !== undefined &&
        AllCorousel[i].classList.contains("active")
      ) {
        AllCorousel[i + operator].classList.add("active");
        AllCorousel[i].classList.remove("active");
        break;
      }
      i++;
    }
  }

  function getCard(props: CardProps) {
    return (
      <Card
        key={props.id}
        Author={props.Author}
        Avaliation={props.Avaliation}
        Curse={props.Curse}
        Stars={props.Stars}
        imageCard={props.imageCard}
      />
    );
  }

  function showOnebyOne() {
    return CardArray.map((card: CardProps, i) => {
      return (
        <div key={i} className={`CorouselItem ${!i ? "active" : ""}`}>
          <Card
            Author={card.Author}
            Avaliation={card.Avaliation}
            Curse={card.Curse}
            Stars={card.Stars}
            imageCard={card.imageCard}
            key={card.id}
          />
          <p key={i + "p"}>{`Curso ${i + 1} de  ${CardArray.length} `}</p>
        </div>
      );
    });
  }

  function ShowAllCards() {
    const largeWindow = window.innerWidth;
    if (largeWindow > 1000) {
      if (CardArray.length > 3) {
        return CardArray.map((card, i) => {
          return (
            <div
              key={i + "0"}
              className={`CorouselItem ${i === 0 ? "active" : ""}`}
            >
              <div key={i + "1"} className="ShowCards">
                <a key={i + "2"} href={card.link} >
                  {CardArray[i - 1] ? getCard(CardArray[i - 1]) : ""}
                </a>
                <a key={i + "3"} href={card.link}>
                  {getCard(card)}
                </a>
                <a key={i + "4"} href={card.link} >
                  {CardArray[i + 1] ? getCard(CardArray[i + 1]) : ""}
                </a>
              </div>
              <p key={i + "5"}>{`Curso ${i + 1} de  ${CardArray.length} `}</p>
            </div>
          );
        });
      } else return showOnebyOne();
    }
    return showOnebyOne();
  }

  return (
    <div className="CorouselContainer">
      <div className="Prev Control">
        <button onClick={() => carouselControl(-1)}>
          <svg viewBox="0 0 30 49" fill="none">
            <path
              d="M0.999691 21.8977L20.3186 1.07919C21.6539 -0.359731 23.8131 -0.359731 25.1342 1.07919L28.3445 4.53874C29.6798 5.97766 29.6798 8.30444 28.3445 9.72805L14.665 24.5L28.3587 39.2566C29.694 40.6956 29.694 43.0223 28.3587 44.4459L25.1484 47.9208C23.8131 49.3597 21.6539 49.3597 20.3328 47.9208L1.0139 27.1023C-0.335589 25.6634 -0.335588 23.3366 0.999691 21.8977Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="CorouselItemContainer">{ShowAllCards()}</div>
      <div className="Next Control">
        <button onClick={() => carouselControl(1)}>
          <svg viewBox="0 0 30 49" fill="none">
            <path
              d="M28.3605 27.1023L9.0416 47.9208C7.70631 49.3597 5.54714 49.3597 4.22606 47.9208L1.01571 44.4613C-0.319572 43.0223 -0.319572 40.6956 1.01571 39.2719L14.6952 24.5L1.0015 9.74336C-0.333776 8.30444 -0.333776 5.97767 1.0015 4.55405L4.21186 1.07919C5.54714 -0.35973 7.70631 -0.35973 9.02739 1.07919L28.3463 21.8977C29.6958 23.3366 29.6958 25.6634 28.3605 27.1023Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
