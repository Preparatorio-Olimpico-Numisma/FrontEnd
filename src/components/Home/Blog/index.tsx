import { Title } from "../../Home/TitlePages";
import { Carousel } from "react-responsive-carousel";

import { images } from "./images";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

type ImagesProps = {
  image: string;
  description: string;
};

export function Blog() {
  return (
    <div id="Blog">
      <header className="BlogTopImage">
        <svg viewBox="0 0 1500 199" fill="none">
          <path
            d="M-1 87C-1.00001 87 -2.80881 105 263 80.8908C529 56 743 -77 1075 63.745C1408 205 1500 161 1500 161V199H0"
            fill="white"
          />
        </svg>
      </header>
      <main>
        <Title>Fique por dentro do mundo olímpico!</Title>
        <section className="BlogContent">
          <div className="ContainerCarousel">
            <Carousel>
              {images.map((e: ImagesProps, index) => {
                return (
                  <div key={index}>
                    <img
                      src={e.image}
                      alt={e.description}
                      className="CarouselImage"
                    />
                    <p className="legend">{e.description}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
