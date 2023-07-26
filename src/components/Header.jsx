import React from 'react'

const Header = () => {
  return (
    <>
      <header className="position-sticky top-0 w-100">
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
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
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
        <nav className="bg-black">
          <div className="container d-flex justify-content-between text-white p-3">
            <div>
              <p>Каталог ножей</p>
              <p></p>
            </div>
            <div>
              <p>Клинковое оружие</p>
              <p></p>
            </div>
            <div>
              <p>Сувенирные изделия</p>
              <p></p>
            </div>
            <div>
              <p>Фонари ARMYTEK</p>
              <p></p>
            </div>
            <div>
              <p>Сопуствующие товары</p>
              <p></p>
            </div>
          </div>
        </nav>
        <nav className="p-2 bg-black text-light d-lg-none position-fixed end-0 start-0 bottom-0">
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
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
