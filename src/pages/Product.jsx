import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import SpecialProduct from '../components/SpecialProduct';

const Product = () => {
  const [count, setCount] = useState(1)
  const { product_title } = useParams()

  const [display, setDisplay] = useState([ ["d-block", "text-black fw-bold"], ["d-none", "text-secondary"], ["d-none", "text-secondary"], ["d-none", "text-secondary"],])
  const [img, setImg] = useState("/knife1.png");
   let obj = {
     name: "Похожие товары",
     site: "Все Похожие",
   };
   let obj1 = {
     name: "Рекомендуем",
     site: "Все Рекомендуем",
   };
   let product = {
    price:3865,
     img: [
       "/knife1.png",
       "/knife2.png",
       "/knife3.png",
       "/knife4.png",
       "/knife5.png",
     ],
   }

  return (
    <>
      <Header />
      <section className="container p-3">
        <div className="d-flex gap-3 align-items-center ">
          <Link to="/" className="text-secondary">
            Главная
          </Link>
          <i class="fa fa-solid fa-chevron-right text-warning"></i>
          <Link to="/products" className="text-secondary">
            Products
          </Link>
          <i class="fa fa-solid fa-chevron-right text-warning"></i>
          <p className="text-warning">{product_title}</p>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 py-4 ">
          <div className="pe-2 h-100">
            <div>
              <img
                src={img}
                className="product-karzinka-card-img w-100"
                alt=""
              />
            </div>
            <div className="d-flex">
              <div
                className="p-2"
                onClick={() => setImg((img) => product.img[1])}
              >
                <img src={product.img[1]} className="w-100 h-100" alt="" />
              </div>
              <div
                className="p-2"
                onClick={() => setImg((img) => product.img[2])}
              >
                <img src={product.img[2]} className="w-100 h-100" alt="" />
              </div>
              <div
                className="p-2"
                onClick={() => setImg((img) => product.img[3])}
              >
                <img src={product.img[3]} className="w-100 h-100" alt="" />
              </div>
              <div
                className="p-2"
                onClick={() => setImg((img) => product.img[4])}
              >
                <img src={product.img[4]} className="w-100 h-100" alt="" />
              </div>
            </div>
          </div>
          <div className="card-shadow p-3 bg-light ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-sm-4 col-6  ">
                <h4 className="m-0">Нож Снегирь</h4>
                <a href="#" className="text-success mb-3">
                  В наличии
                </a>
              </div>
              <div className="col-sm-8 col-6  row row-cols-1  row-cols-sm-3  justify-content-between">
                <span className="d-flex gap-2 ">
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                </span>
                <div className="d-flex gap-3 ">
                  <img src="/torozi.png" alt="" />
                  <i className="fa fa-heart-o fs-3 text-warning"></i>
                </div>
              </div>
            </div>

            <hr />
            <div className="row">
              <p className="col">Артикул:</p>
              <p className="text-secondary col">AF0000001952</p>
            </div>
            <div className="row">
              <p className="col">Торговая марка::</p>
              <p className="text-secondary col">WUESTHOF (Германия)</p>
            </div>
            <div className="row">
              <p className="col">Серия:</p>
              <p className="text-secondary col">Ножи серии Classic Ikon</p>
            </div>
            <div className="row">
              <p className="col">Бонусные баллы:</p>
              <p className="text-secondary col">38</p>
            </div>
            <hr />
            <div className="row  justify-content-between align-items-center pb-2 gap-2">
              <p className="col-sm-4">Сталь</p>
              <select class="col-sm-7  border p-2">
                <option selected>Выбрать сталь</option>
                <option value="1">100Х13М</option>
                <option value="2">40Х10С2М (ЭИ-107)</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
              </select>
            </div>
            <div className="row  justify-content-between align-items-center pb-2">
              <p className="col-sm-4">Рукоять</p>
              <select class=" col-sm-7 border p-2">
                <option selected>Выбрать рукоять</option>
                <option value="1">100Х13М</option>
                <option value="2">40Х10С2М (ЭИ-107)</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
              </select>
            </div>
            <div className="row  justify-content-between align-items-center pb-2">
              <p className="col-sm-4">Гарда и тыльник</p>
              <select class="col-sm-7 border p-2">
                <option selected>Выбрать гарда и тыльник</option>
                <option value="1">100Х13М</option>
                <option value="2">40Х10С2М (ЭИ-107)</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
              </select>
            </div>
            <div className="row  justify-content-between align-items-center pb-2">
              <p className="col-sm-4">Обработка клинка</p>
              <select class=" col-sm-7 border p-2">
                <option selected>Выбрать обработку клинка</option>
                <option value="1">100Х13М</option>
                <option value="2">40Х10С2М (ЭИ-107)</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
                <option value="3">50Х14МФ</option>
              </select>
            </div>
            <div className="d-flex justify-content-between ">
              <span className="d-flex align-items-center gap-1">
                <h3 className="m-0">{product.price * count}</h3>
                <img src="/rubl.png" alt="" className="h-50" />
              </span>
              <div
                type="button"
                class="d-flex align-items-center gap-3"
                data-bs-toggle="popover"
                data-bs-title="Popover title"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
              >
                <p className="text-secondary">+ 449 баллов за покупку</p>
                <p className="p-1 border rounded-circle bg-secondary">?</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-4 d-flex gap-3 align-items-center my-3">
                <button
                  className="btn btn-dark"
                  onClick={() => setCount((count) => count - 1)}
                >
                  -
                </button>
                <h4>{count}</h4>
                <button
                  className="btn btn-dark"
                  onClick={() => setCount((count) => count + 1)}
                >
                  +
                </button>
              </div>
              <div className="col-sm-8">
                <div className=" row justify-content-between gap-1">
                  <button className="col-sm-5 btn btn-warning d-flex text-white align-items-center justify-content-center gap-2 w-sm-50">
                    В корзину
                    <i class="fa fa fa-cart-plus fs-lg-5 "></i>
                  </button>
                  <button className="col-sm-5 btn btn-dark text-center w-sm-50">
                    Купить в 1 клик
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-shadow p-3">
          <div className="row row-cols-sm-4">
            <p
              className={display[0][1]}
              onClick={() =>
                setDisplay((display) => [
                  ["d-block", "text-black fw-bold"],
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                ])
              }
            >
              Описание
            </p>
            <p
              className={display[1][1]}
              onClick={() =>
                setDisplay((display) => [
                  ["d-none", "text-secondary"],
                  ["d-block", "text-black fw-bold"],
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                ])
              }
            >
              Характеристика
            </p>
            <p
              className={display[2][1]}
              onClick={() =>
                setDisplay((display) => [
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                  ["d-block", "text-black fw-bold"],
                  ["d-none", "text-secondary"],
                ])
              }
            >
              Отзывы
            </p>
            <p
              className={display[3][1]}
              onClick={() =>
                setDisplay((display) => [
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                  ["d-none", "text-secondary"],
                  ["d-block", "text-black fw-bold"],
                ])
              }
            >
              Доставка
            </p>
          </div>
          <hr />
          <div className={display[0][0]}>
            <p>
              Легкий удобный нож с клинком, имеющим пологие вогнутые линзовидные
              спуски на две трети ширины клинка, образующие тонкое, прекрасно
              режущее лезвие толщиной около 0,6 мм в районе подводов.
              <br />
              Обух клинка со спинкой рукояти имеет одну плавную дугообразную
              линию. На пяте перед рукоятью есть подпальцевый вырез для точных
              работ. Необходимо проявлять некоторую осторожность при работе с
              большими боковыми нагрузками на лезвие ножа, ввиду небольшой
              толщины клинка в рабочей части.
              <br />
              Монтаж рукояти накладной плашечный.На навершии рукояти, функцию
              которого выполняет выступающий из под плашек хвостовик, имеется
              отверстие под темляк. Этот нож удобный помощник при работе с
              продуктами и охоте на боровую и водоплавающую дичь.
            </p>
          </div>
          <div className={display[1][0]}>
            <div className="row row-cols-1  row-cols-lg-4 justify-content-between">
              <div className="border-right">
                <h5>Технические характеристики</h5>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
              </div>
              <div className="border-right">
                <h5>Используемые материалы</h5>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
                <div className="d-flex justify-content-between pe-5">
                  <p>Общая длина, мм:</p>
                  <p>227</p>
                </div>
              </div>
              <div className="border-right">
                <h5>Производство</h5>
                <div className="d-flex justify-content-between pe-5">
                  <p>Производство:</p>
                  <p>АиР</p>
                </div>
              </div>
            </div>
          </div>
          <div className={display[2][0]}>
            <div className="d-flex gap-4 border-bottom pb-2 mt-3">
              <div>
                <img src="/user.png" alt="" />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Никита Панков</h3>
                  <p className="text-secondary">29.06.2019</p>
                </div>
                <span className="d-flex gap-1">
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                </span>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eos animi doloribus quos praesentium maxime
                  consequatur voluptatum ipsum eveniet mollitia architecto
                  dolorum sequi sapiente, nam atque aliquam deserunt facere?
                  Saepe minima, eaque et
                </p>
                <div className="d-flex justify-content-between text-warning mt-3">
                  <p>Ответить</p>
                  <i className="fa fa-heart-o fs-3 text-warning"></i>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 border-bottom pb-2 mt-3">
              <div>
                <img src="/user.png" alt="" />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Никита Панков</h3>
                  <p className="text-secondary">29.06.2019</p>
                </div>
                <span className="d-flex gap-1">
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                  <i class="fa fa-solid fa-star text-warning"></i>
                </span>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eos animi doloribus quos praesentium maxime
                  consequatur voluptatum ipsum eveniet mollitia architecto
                  dolorum sequi sapiente, nam atque aliquam deserunt facere?
                  Saepe minima, eaque et
                </p>
                <div className="d-flex justify-content-between text-warning mt-3">
                  <p>Ответить</p>
                  <i className="fa fa-heart-o fs-3 text-warning"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={display[3][0]}>
            <div className="d-flex gap-5 align-items-center mb-2">
              <h5>Ваша страна:</h5>
              <div>
                <select class=" border p-2">
                  <option selected>Россия</option>
                  <option selected>Санкт-Петербург</option>
                  <option selected>Екатеринослав</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-5 align-items-center mb-2">
              <h5>Ваш город :</h5>
              <div>
                <select class=" border p-2">
                  <option selected>Россия</option>
                  <option selected>Санкт-Петербург</option>
                  <option selected>Екатеринослав</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="d-flex p-3 border-bottom align-items-center gap-5">
              <img src="/rossiya-pochta.png" alt="" />
              <p>Почта России</p>
            </div>
            <div className="d-flex p-3 border-bottom align-items-center gap-5">
              <img src="/rossiya-pochta.png" alt="" />
              <p>Почта России</p>
            </div>
          </div>
        </div>
      </section>
      <SpecialProduct props={obj} carouselId={9} />
      <SpecialProduct props={obj1} carouselId={10} />
      <Footer />
    </>
  );
}

export default Product
