import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Information from '../components/Information';

const Category = () => {
  const { category_title } = useParams()
    let obj = {
      id: 1,
      img: "/fonar-card.png",
      title: "Нож Лиса",
      size: "95х18",
      structure: "Орех, Алюминий",
      result: "12 отзывов",
      price: "1200",
    };
      let obj2 = {
        title: "Как выбрать лучший разделочный нож",
        description:"При подборе такого изделия нужно учитывать несколько важных факторов Особенно обращать внимание на то, что ножи разделочные, цена которых намного выше своих аналогов не всегда являются качественными. Потому при выборе изделия учитываете следующие особенности:Рукоять такого инструмента должна обеспечивать плотный захват. При этом разделочный нож не только должен хорошо лежать в руке, но и не скользить при работе, независимо от того, чистый он, или чем-либо испачкан и намочен.Вторым моментом становится заточка, в частности ее тип и угол. Все изделия, представленные в нашем каталоге, обладают наиболее оптимальными характеристиками заточки, которая проводится с использованием лазерных технологий.И следующим важным фактором становится крепление лезвия к ручке, которое должно быть максимально надежным и создавать цельную систему.И если вы не знаете, какой разделочный нож выбрать, то рекомендуем проконсультироваться у наших специалистов, которые помогут принять решение и подобрать изделие, подходящее под Ваши нужды."
      };
  return (
    <>
      <Header />
      <section className="container p-3">
        <h2>Разделочные ножи</h2>
        <div className="row d-flex justify-content-between">
          <div className="col-lg-8 d-flex gap-3 align-items-center">
            <Link to="/" className="text-secondary">
              Главная
            </Link>
            <i class="fa fa-solid fa-chevron-right text-warning"></i>
            <Link to="/categorys" className="text-secondary">
              Categorys
            </Link>
            <i class="fa fa-solid fa-chevron-right text-warning"></i>
            <p className="text-warning">{category_title}</p>
          </div>
          <div className="col-lg-4">
            <select class="form-select" aria-label="Default select example ">
              <option selected>По популярности</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-3">
            <h5 className="p-3 bg-black text-white">Фильтр товаров</h5>
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Производство
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        АиР <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Сергея Баранова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Умерова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЗОСС <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗИК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЛАТКО <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗлатПрофит <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗОК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        НБК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Оружейник <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        РОСоружие <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        СТИЛЬ-М <span className="text-warning">(250)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button collapsed bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Сталь
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        АиР <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Сергея Баранова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Умерова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЗОСС <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗИК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЛАТКО <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗлатПрофит <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗОК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        НБК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Оружейник <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        РОСоружие <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        СТИЛЬ-М <span className="text-warning">(250)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Рукоять
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        АиР <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Сергея Баранова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Умерова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЗОСС <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗИК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЛАТКО <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗлатПрофит <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗОК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        НБК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Оружейник <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        РОСоружие <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        СТИЛЬ-М <span className="text-warning">(250)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button collapsed bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Гарда и тыльник
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        АиР <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Сергея Баранова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Умерова{" "}
                        <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЗОСС <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗИК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗЛАТКО <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗлатПрофит <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        ЗОК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        НБК <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Оружейник <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        РОСоружие <span className="text-warning">(250)</span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        СТИЛЬ-М <span className="text-warning">(250)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    class="accordion-button collapsed bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Золочение
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        АиР
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Булат Сергея Баранова
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    class="accordion-button collapsed bg-black text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    Рейтинг
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span className="d-flex gap-1 align-items-center">
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <h6 className="m-0 ms-2">5/5</h6>
                        </span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span className="d-flex gap-1 align-items-center">
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <h6 className="m-0 ms-2">4/5</h6>
                        </span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span className="d-flex gap-1 align-items-center">
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <h6 className="m-0 ms-2">3/5</h6>
                        </span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span className="d-flex gap-1 align-items-center">
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <h6 className="m-0 ms-2">2/5</h6>
                        </span>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span className="d-flex gap-1 align-items-center">
                          <i class="fa fa-solid fa-star text-warning"></i>
                          <h6 className="m-0 ms-2">1/5</h6>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row row-cols-3 ps-3">
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
            </div>
            <div className="d-flex justify-content-between align-items-center ps-3 pt-3">
              <button type="button" class="btn btn-outline-warning ">
                Показать больше
              </button>
              <div aria-label="Page navigation example d-flex">
                <ul class="pagination ">
                  <li class="page-item disabled">
                    <a class="page-link">
                      <i class="fa fa-solid fa-chevron-left text-warning"></i>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link bg-warning text-white" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link text-reset" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link text-reset" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link text-warning" href="#">
                      <i class="fa fa-solid fa-chevron-right text-warning"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Information props={obj2} />
      <Footer />
    </>
  );
}

export default Category;
