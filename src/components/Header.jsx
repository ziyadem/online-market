import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigation=useNavigate()
  return (
    <>
      <header>
        <nav className="bg-black">
          <div className="container p-3 d-flex justify-content-between align-items-center">
            <ul className="d-none  d-lg-flex list-unstyled gap-5 m-0 ">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  О нас
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Оплата и доставка
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Новости
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Контакты
                </a>
              </li>
            </ul>
            <i
              data-bs-toggle="offcanvas"
              href="#offcanvasDark"
              role="button"
              aria-controls="offcanvasDark"
              className="fa fa-navicon text-light fs-2 d-lg-none "
            ></i>
            <img
              src="/logo-sm.png"
              alt="logo"
              id="logo"
              className="d-lg-none"
            />
            <a
              href="/"
              className="d-flex align-items-center text-light text-decoration-none gap-3"
            >
              <i className="fa  fa-user-o text-light fs-2"></i>
              <span className="d-none d-lg-block">Личный кабинет</span>
            </a>
          </div>
        </nav>
        <nav className="bg-light ">
          <div className="container p-3 d-none d-lg-flex justify-content-between align-items-center">
            <img src="/logo.png" alt="logo" id="logo" />
            <div className="pt-1 pb-1 ps-3 rounded search-div  text-dark w-25">
              <i className="fa fa-search text-black pe-2"></i>
              <input type="text" className="search-input" placeholder="Поиск" />
            </div>
            <div className="d-flex gap-3 align-items-center">
              <a
                href="https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@55.582026,37.3855235,9z/data=!3m1!4b1!4m6!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu"
                target="_blank"
                className="d-flex align-items-center gap-2 text-dark text-decoration-none"
              >
                <i class="fa fa-map-marker"></i>
                <h6 className="m-0">Москва</h6>
              </a>
              <ul className="m-0 list-unstyled">
                <li className="d-flex gap-2">
                  <h6 className="m-0">8-800-777-49-67</h6>
                  <i className="fa fa-sort-down text-warning"></i>
                </li>
                <li>
                  <a
                    href="tel:8-800-777-49-67"
                    className="text-warning text-decoration-none fw-bold"
                  >
                    Заказать звонок
                  </a>
                </li>
              </ul>
              <span>
                <i className="fa fa-heart-o fs-3"></i>
              </span>
              <span className="d-flex align-items-center gap-2">
                <i class="fa fa fa-cart-plus fs-2"></i>
                <span>
                  <h6 className="m-0">0 p.</h6>
                  <div className="top-number bg-warning">
                    <p className="text-center">0</p>
                  </div>
                  <a
                    href="/"
                    className="m-0 text-warning text-decoration-none fw-bold"
                  >
                    Оформить заказ
                  </a>
                </span>
              </span>
            </div>
          </div>
        </nav>
        <nav className="p-2 bg-black text-light d-lg-none position-fixed end-0 start-0 bottom-0 ">
          <div className="container d-flex justify-content-between w-100">
            <div className="text-center header-bottom-card">
              <i className="fa fa-home d-lg-none fs-2"></i>
              <p>Главная</p>
            </div>
            <div className="text-center header-bottom-card">
              <i className="fa fa-navicon d-lg-none fs-2"></i>
              <p>Каталог</p>
            </div>
            <div className="text-center header-bottom-card">
              <i className="fa fa-search d-lg-none fs-2"></i>
              <p>Поиск</p>
            </div>
            <div className="text-center header-bottom-card">
              <i className="fa fa fa-cart-plus fs-2 d-lg-none fs-2"></i>
              <p>Корзина</p>
            </div>
            <div className="text-center header-bottom-card">
              <i className="	fa fa-ellipsis-v d-lg-none fs-2"></i>
              <p>Ещё</p>
            </div>
          </div>
        </nav>
        <div
          class="offcanvas offcanvas-start show text-bg-dark"
          tabindex="-1"
          id="offcanvasDark"
          aria-labelledby="offcanvasDarkLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkLabel">
              Header
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvasDark"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="accordion accordion-flush" id="accordionFlushExample2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="header-acordion">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#header-acordion"
                    aria-expanded="false"
                    aria-controls="header-acordion"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="fheader-acordion"
                  class="accordion-collapse collapse"
                  aria-labelledby="header-acordion"
                  data-bs-parent="#accordionFlushExample2"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-black position-sticky top-0 start-0 header-naw">
        <div className="container d-none d-lg-flex justify-content-between px-3 pt-3">
          <div class="dropdown header-naw-three text-light">
            <h6 data-bs-toggle="dropdown">Каталог ножей</h6>
            <ul class="dropdown-menu p-3 bg-black text-light">
              <div className="d-flex justify-content-between">
                <p>Категория ножей</p>
                <p>Производство ножей</p>
                <p>Ножи по маркам стали</p>
                <p>Заточка и полировка ножей</p>
                <p>Ножевая мастерская</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <ul className="list-unstyled">
                  <li onClick={() => navigation("/categorys/Разделочные ножи")}>
                    <p className="pb-2">Разделочные ножи</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Туристические ножи")}
                  >
                    <p className="pb-2">Туристические ножи</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи охотничьи")}>
                    <p className="pb-2">Ножи охотничьи</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Булатные ножи")}>
                    <p className="pb-2">Булатные ножи</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи из дамаска")}>
                    <p className="pb-2">Ножи из дамаска</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Тактического назначения")
                    }
                  >
                    <p className="pb-2">Тактического назначения</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Метательные ножи")}>
                    <p className="pb-2">Метательные ножи</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Мачете и кукри")}>
                    <p className="pb-2">Мачете и кукри</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи кухонные")}>
                    <p className="pb-2">Ножи кухонные</p>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li onClick={() => navigation("/categorys/Ножи АИР")}>
                    <p className="pb-2">Ножи АИР</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи ЗИК")}>
                    <p className="pb-2">Ножи ЗИК</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи ЗЗОСС")}>
                    <p className="pb-2">Ножи ЗЗОСС</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи РОСоружие")}>
                    <p className="pb-2">Ножи РОСоружие</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи Оружейник")}>
                    <p className="pb-2">Ножи Оружейник</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Булат Сергея Баранова")
                    }
                  >
                    <p className="pb-2">Булат Сергея Баранова</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Булат Андрея Умерова")
                    }
                  >
                    <p className="pb-2">Булат Андрея Умерова</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи Златко")}>
                    <p className="pb-2">Ножи Златко</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Ножи Стиль-М")}>
                    <p className="pb-2">Ножи Стиль-М</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Оружейная компания")}
                  >
                    <p className="pb-2">Оружейная компания</p>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали 40х102С2М")
                    }
                  >
                    <p className="pb-2">Ножи из стали 40х102С2М</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Ножи из стали 95х18")}
                  >
                    <p className="pb-2">Ножи из стали 95х18</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали 100х13м")
                    }
                  >
                    <p className="pb-2">Ножи из стали 100х13м</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали 110х18м-ШД")
                    }
                  >
                    <p className="pb-2">Ножи из стали 110х18м-ШД</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали ЭИ-107 ТЦ")
                    }
                  >
                    <p className="pb-2">Ножи из стали ЭИ-107 ТЦ</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали 50х14МФ")
                    }
                  >
                    <p className="pb-2">Ножи из стали 50х14МФ</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Ножи из стали AUS-8")}
                  >
                    <p className="pb-2">Ножи из стали AUS-8</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Ножи из стали К340")}
                  >
                    <p className="pb-2">Ножи из стали К340</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Ножи из стали M390")}
                  >
                    <p className="pb-2">Ножи из стали M390</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Ножи из стали ЭП-766")
                    }
                  >
                    <p className="pb-2">Ножи из стали ЭП-766</p>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li onClick={() => navigation("/categorys/Ножевые клинки")}>
                    <p className="pb-2">Ножевые клинки</p>
                  </li>
                  <li
                    onClick={() => navigation("/categorys/Заготовки для ножей")}
                  >
                    <p className="pb-2">Заготовки для ножей</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Литье для ножей")}>
                    <p className="pb-2">Литье для ножей</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Материалы для рукоятей")
                    }
                  >
                    <p className="pb-2">Материалы для рукоятей</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Уход за рукоятиями ножей")
                    }
                  >
                    <p className="pb-2">Уход за рукоятиями ножей</p>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li onClick={() => navigation("/categorys/Паста ГОИ")}>
                    <p className="pb-2">Паста ГОИ</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Алмазная паста")}>
                    <p className="pb-2">Алмазная паста</p>
                  </li>
                  <li
                    onClick={() =>
                      navigation("/categorys/Бруски и камни для заточки")
                    }
                  >
                    <p className="pb-2">Бруски и камни для заточки</p>
                  </li>
                  <li onClick={() => navigation("/categorys/Заточные системы")}>
                    <p className="pb-2">Заточные системы</p>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  className="text-warning"
                  onClick={() => navigation("/categorys")}
                >
                  Смотреть все
                </p>
                <p
                  className="text-warning"
                  onClick={() => navigation("/categorys")}
                >
                  Смотреть все
                </p>
                <p
                  className="text-warning"
                  onClick={() => navigation("/categorys")}
                >
                  Смотреть все
                </p>
                <p
                  className="text-warning"
                  onClick={() => navigation("/categorys")}
                >
                  Смотреть все
                </p>
                <p
                  className="text-warning"
                  onClick={() => navigation("/categorys")}
                >
                  Смотреть все
                </p>
              </div>
            </ul>
          </div>
          <div
            className="header-naw-three text-light"
            onClick={() => navigation("/categorys/Клинковое оружие")}
          >
            <h6>Клинковое оружие</h6>
            <p className="header-naw-hover-hr"></p>
          </div>
          <div
            className="header-naw-three text-light"
            onClick={() => navigation("/categorys/Сувенирные изделия")}
          >
            <h6>Сувенирные изделия</h6>
            <p className="header-naw-hover-hr"></p>
          </div>
          <div
            className="header-naw-three text-light"
            onClick={() => navigation("/categorys/Фонари ARMYTEK")}
          >
            <h6>Фонари ARMYTEK</h6>
            <p className="header-naw-hover-hr"></p>
          </div>
          <div
            className="header-naw-three text-light"
            onClick={() => navigation("/categorys/Сопуствующие товары")}
          >
            <h6>Сопуствующие товары</h6>
            <p className="header-naw-hover-hr"></p>
          </div>
        </div>
        <div>
          <div className="d-none">
            <div className="container">
              <div className="d-flex justify-content-between text-light gap-5">
                <p>Категория ножей</p>
                <p>Категория ножей</p>
                <p>Категория ножей</p>
                <p>Категория ножей</p>
                <p>Категория ножей</p>
              </div>
              <p className="container border bg-light bg-opacity-50 my-4"></p>
              <div className="d-flex justify-content-between gap-5">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white">
                      Разделочные ножи
                    </a>
                  </li>
                </ul>
              </div>
              <p className="container border bg-light bg-opacity-50 my-4"></p>
              <div className="d-flex text-warning justify-content-between pb-4">
                <p>Смотреть все</p>
                <p>Смотреть все</p>
                <p>Смотреть все</p>
                <p>Смотреть все</p>
                <p>Смотреть все</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header
