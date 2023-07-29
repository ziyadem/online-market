import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section>
      <div className="main">
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
      </div>
      <div className="container py-5 hero">
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys")}
          >
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys/Среднеклинковое оружие")}
          >
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys/Длинноклинковое оружие")}
          >
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys/Сувенирные изделия")}
          >
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys/Сопутствующие товары")}
          >
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
          <div
            className="col-12 col-sm-6 col-lg-4 p-3 "
            onClick={() => navigation("/categorys/Ножевая мастерская")}
          >
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
      </div>
    </section>
  );
}

export default Main
