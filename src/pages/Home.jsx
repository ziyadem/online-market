import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import SpecialProduct from '../components/SpecialProduct';
import FreshProduct from '../components/FreshProduct';
import ProductCard from '../components/ProductCard';

const Home = () => {
  let obj = {
    name: "Хиты продаж",
    site: "Перейти в каталог",
  };
  let obj1 = {
    name: "Акции",
    site: "Все акции",
  };
  let obj2 = {
    name: "Новинки",
    site: "Больше новинок",
    description:
      "Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.",
  };
  let obj3 = {
    name: "Фонари",
    site: "Перейти в каталог",
  };
  return (
    <>
      <Header />
      <section className="main">
        <div className="main-div">
          <div className="container py-5">
            <div className=" text-white row justify-content-between">
              <span className="col-12 col-lg-8">
                <h1>Интернет магазин сертифицированных</h1>
                <h6 className="py-2">златоустовских ножей</h6>
                <p>
                  Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем
                  магазине представлен наиболее широкий выбор Златоустовских
                  ножей от Златоустовских Оружейных Фабрик и компаний, мы
                  являемся официальными поставщиками.
                </p>
                <Link
                  to="/category"
                  className="btn btn-warning text-light my-3 w-lg-25"
                >
                  Подробнее
                </Link>
              </span>
              <img
                className="col-12 p-5 p-lg-0 col-lg-3  align-self-center  "
                src="/knife.png"
                alt="knife"
              />
            </div>
            <div className="row my-3">
              <div className="col-12 pb-4 col-sm-6 col-lg-3 text-center text-light ">
                <img src="/garantiya.png" alt="img" className="mb-2" />
                <p>Гарантия 100% возврата денежных средств</p>
              </div>
              <div className="col-12 pb-4 col-sm-6 col-lg-3 text-center text-light ">
                <img src="/dastavka.png" alt="img" className="mb-2" />
                <p>Доставка по России, Казахстану и Белоруссии</p>
              </div>
              <div className="col-12 pb-4 col-sm-6 col-lg-3 text-center text-light ">
                <img src="/afarmlena.png" alt="img" />
                <p>Возможность оформление заказа без регистрации.</p>
              </div>
              <div className="col-12 pb-4 col-sm-6 col-lg-3 text-center text-light ">
                <img src="/skidka.png" alt="img" className="mb-2" />
                <p>Скидки постоянным покупателям.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 hero">
        <div className="p-3 card-shadow mb-5">
          <h2>Интернет-магазин сертифицированных Златоустовских ножей</h2>
          <p className="mb-3">
            Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
            представлен наиболее широкий выбор Златоустовских ножей от
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками. В нашем магазине Вы можете посмотреть, сравнить,
            оценить и купить понравившийся златоустовский нож с официальной
            гарантией, не выходя из дома, имея под рукой только устройство с
            выходом в интернет (ПК, ноутбук, планшет, смартфон) и телефон.
          </p>
          <p>
            {" "}
            Оформить заказ можно без лишних усилий, Вам необходимо только
            выбрать нож, нажать кнопку «Купить» перейти в корзину и заполнить
            предложенные поля, и Ваш заказ уже принят! Наши менеджеры оперативно
            свяжутся с Вами по телефону и обсудят детали заказа. Мы осуществляем
            доставку продукции в любой населённый пункт по всей России,
            Казахстану и Белоруссии.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Каталог ножей</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card1.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Среднеклинковое оружие</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card2.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Длинноклинковое оружие</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card3.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Сувенирные изделия</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card4.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Сопутствующие товары</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card5.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="card-shadow p-3">
              <h5>Ножевая мастерская</h5>
              <p className="card-category-hr"></p>
              <div className="d-flex justify-content-between">
                <ul className="mt-4 w-50">
                  <li>
                    <p>Разделочные</p>
                  </li>
                  <li className="py-3">
                    <p>Туристические</p>
                  </li>
                  <li>
                    <p>Охотничьи</p>
                  </li>
                </ul>
                <div className="w-50">
                  <img src="/knife-card6.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SpecialProduct props={obj} />
      <FreshProduct props={obj2} />
      <SpecialProduct props={obj1} />
      <SpecialProduct props={obj1} />
      <FreshProduct props={obj2} />
      <SpecialProduct props={obj1} />
      <SpecialProduct props={obj1} />
      <section className="container">
        <h2 className="ps-3">Наши статьи</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 p-3">
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Все о ножах: как правильно выбрать</h5>
                <p>24.07.2019</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/knife-card8.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Как правильно выбрать фонарь</h5>
                <p>24.07.2019</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/knife-card9.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Как правильно выбрать фонарь</h5>
                <p>24.07.2019</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/knife-card10.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Как правильно выбрать фонарь</h5>
                <p>24.07.2019</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 p-3">
          <div className="col my-2">
            <div className="card-shadow">
              <div className="row">
                <div className="col-12 col-sm-7 p-4">
                  <h5>Палобные мультифонари</h5>
                  <p className="card-category-hr"></p>
                  <p className="my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    itaque!
                  </p>
                  <button className="btn btn-warning w-75 text-light">
                    {" "}
                    Подробнее
                  </button>
                </div>
                <div className="col-12 col-sm-5">
                  <img src="/fonar1.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow">
              <div className="row">
                <div className="col-12 col-sm-7 p-4">
                  <h5>Палобные мультифонари</h5>
                  <p className="card-category-hr"></p>
                  <p className="my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    itaque!
                  </p>
                  <button className="btn btn-warning w-75 text-light">
                    {" "}
                    Подробнее
                  </button>
                </div>
                <div className="col-12 col-sm-5">
                  <img src="/fonar1.png" alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
      <SpecialProduct props={obj3} />
      <section className="section-last">
        <div className="section-last-div py-5">
          <div className="container  text-center">
            <h1 className="mb-3 text-warning">
              Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
            </h1>
            <p className="text-light">
              Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
              качества из города оружейников - Златоуста. Златоустовские ножи
              известны и популярны среди потребителей как на российским рынке,
              так и за рубежом: ножи охотничьи, хозяйственные, туристические,
              рыбацкие, складные и метательные. Нож Златоуста - это идеальный
              друг и товарищ в повседневной жизни и в экстремальных ситуациях.
              На многую продукцию распространяется гарантия до 10 лет - это один
              из главных показателей качества. Для Вас на нашем сайте "zlatmax"
              предложен огромный ассортимент Златоустовских ножей. Наши
              менеджеры помогут определиться и подобрать самый лучший
              Златоустовский нож, ориентируясь на Ваши пожелания.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home
