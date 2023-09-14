import concertVideo from "../videos/Cheering crowd.mp4";

import artist1 from "../images/artists/bilderbuch.jpg";
import artist2 from "../images/artists/wanda.jpg";
import artist3 from "../images/artists/christina-sturmer.jpg";
import artist4 from "../images/artists/volbeat2.jpg";
import artist5 from "../images/artists/imagine-dragons.jpg";
import artist6 from "../images/artists/opus2.webp";

// import concert1 from "../images/concert/actionvance-eXVd7gDPO9A-unsplash.jpg";
// import concert2 from "../images/concert/maxime-lebrun-h5G0WdtwcEg-unsplash.jpg";
// import concert3 from "../images/concert/Elton-John-Messe-Graz-Open-2560x1440.jpg";

import arrowIcon from "../images/arrow.svg";
import arrow2Icon from "../images/arrow2.svg";
import { useState } from "react";

const Home = () => {
  const [opened, setOpened] = useState();

  return (
    <div className="home">
      <div className="videoBox">
        <video
          src={concertVideo}
          loop
          autoplay="autoplay"
          playsInline="playsinline"
          muted="muted"
        ></video>
        {/* <img src={concert1} className="image1" />
        <img src={concert2} className="image2" />
        <img src={concert3} className="image3" /> */}

        <div className="title">Stars in Graz</div>
        <div className="info">
          <div className="place">Messe Congress Graz</div>
        </div>
        <div className="info">
          <div className="date">30.11.2021</div>
        </div>

        <div className="icon">
          <img src={arrowIcon} />
        </div>
      </div>

      <div className="graz">
        <div className="text">
          Messe Congrez Graz - самый большой многофункциональный зал для
          мероприятий в Граце. Еще до того, как «Звезды в Граце», здесь
          выступали многие международные группы и музыканты. Станьте его частью
          и окунитесь в уникальную атмосферу в этот особенный вечер.
        </div>
      </div>

      <div className="concerts">
        <div className="title">Расписание концертов</div>

        <div className="items">
          <div className="item">
            <img src={artist1} />
            <div className="bottom">
              <div className="info">
                <div className="title">Bilderbuch</div>
                <div className="description">17:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>

          <div className="item">
            <img src={artist2} />
            <div className="bottom">
              <div className="info">
                <div className="title">Wanda</div>
                <div className="description">18:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>

          <div className="item">
            <img src={artist3} />
            <div className="bottom">
              <div className="info">
                <div className="title">Christina Stürmer</div>
                <div className="description">19:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>

          <div className="item">
            <img src={artist4} />
            <div className="bottom">
              <div className="info">
                <div className="title">Volbeat</div>
                <div className="description">20:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>

          <div className="item">
            <img src={artist5} />
            <div className="bottom">
              <div className="info">
                <div className="title">Imagine Dragons</div>
                <div className="description">21:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>

          <div className="item">
            <img src={artist6} />
            <div className="bottom">
              <div className="info">
                <div className="title">Opus</div>
                <div className="description">22:00</div>
              </div>
              <div className="button">Купить билеты</div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="title">Отзывы</div>

        <div className="items">
          <div className="item">
            <div className="text">
              «Звезды в Граце» были просто потрясающими. Радость со сцены была
              заразительной. За все годы, что я заказывал концерты, ни один не
              вызвал более восторженного отклика. Это было не в чартах!
            </div>
            <div className="author">- Билл Дизи</div>
          </div>

          <div className="item">
            <div className="text">
              На вчерашнем концерте время остановилось ... Большое спасибо! Мы
              отлично провели время!
            </div>
            <div className="author">- Марк Липман</div>
          </div>

          <div className="item">
            <div className="text">
              Ух ты! Такой восхитительный веселый вечер в прошлую субботу.
              Группы были великолепны, а программа прекрасна! Мы с нетерпением
              ждем следующего.
            </div>
            <div className="author">- Дэвид Рини</div>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="title">FAQ</div>

        <div className="items">
          <div className="item">
            <div
              className="header"
              onClick={() => {
                if (opened == 1) {
                  setOpened();
                } else {
                  setOpened(1);
                }
              }}
            >
              <div className="title">Что такое звезды в Граце?</div>
              <img
                src={arrow2Icon}
                style={{
                  transform: opened == 1 && "rotate(180deg)",
                }}
              />
            </div>

            {opened == 1 && (
              <div className="text">
                «Звезды в Граце» - это однодневный музыкальный концерт, на
                котором разные артисты исполняют свои самые популярные песни.
                Проходит раз в год с 2015 года.
              </div>
            )}
          </div>

          <div className="item">
            <div
              className="header"
              onClick={() => {
                if (opened == 2) {
                  setOpened();
                } else {
                  setOpened(2);
                }
              }}
            >
              <div className="title">Когда состоится «Звезды в Граце»?</div>
              <img
                src={arrow2Icon}
                style={{
                  transform: opened == 2 && "rotate(180deg)",
                }}
              />
            </div>

            {opened == 2 && (
              <div className="text">
                30.10.2021г. Первое действие начинается в 17:00.
              </div>
            )}
          </div>

          <div className="item">
            <div
              className="header"
              onClick={() => {
                if (opened == 3) {
                  setOpened();
                } else {
                  setOpened(3);
                }
              }}
            >
              <div className="title">Какой минимальный возраст?</div>
              <img
                src={arrow2Icon}
                style={{
                  transform: opened == 3 && "rotate(180deg)",
                }}
              />
            </div>

            {opened == 3 && (
              <div className="text">
                Лица младше 16 лет без сопровождения взрослых не допускаются.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
