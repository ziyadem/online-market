import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import SpecialProduct from '../components/SpecialProduct';
import FreshProduct from '../components/FreshProduct';
import ProductCard from '../components/ProductCard';

const Home = () => {
  let obj={
    name:"Aksiya",
    site:"Barcha aksiyalar"
  }
  let obj3={
    name:"Fanar",
    site:"Barcha aksiyalar"
  }
  let obj2 = {
    name: "Aksiya",
    site: "Barcha aksiyalar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium deserunt quasi dolor! Consequuntur, officiis aut. Tempore maiores explicabo distinctio a consequatur atque odit ut ratione expedita. Aut illo accusamus, laborum magnam fugit, dignissimos ab, quia quidem tempore veritatis dicta sunt sapiente adipisci doloremque. Molestias numquam dolores soluta possimus ipsa fugit, doloribus sit! Voluptate, incidunt aliquid! Accusantium eligendi dolor debitis sit? Quis eius nostrum qui ad obcaecati rem, quam ut natus voluptatem ratione, voluptate iste nesciunt tempora consectetur ipsa aliquid non! Beatae earum impedit minus eum asperiores consectetur velit illo laboriosam, optio quae hic sapiente sequi soluta tenetur officia quaerat?",
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
      <section className="container py-5">
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
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 ">
            <div className="d-flex justify-content-between card-shadow p-3">
              <span>
                <h5>katalog nojey</h5>
                <p className="card-category-hr"></p>
                <ul className="mt-4">
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                  <li className="py-3">
                    <p>Lorem ipsum</p>
                  </li>
                  <li>
                    <p>Lorem ipsum</p>
                  </li>
                </ul>
              </span>
              <img src="/card-knife.png" alt="" className="card-category-img" />
            </div>
          </div>
        </div>
      </section>
      <SpecialProduct props={obj} />
      <FreshProduct props={obj2} />
      <SpecialProduct props={obj} />
      <SpecialProduct props={obj} />
      <FreshProduct props={obj2} />
      <SpecialProduct props={obj} />
      <SpecialProduct props={obj} />
      <SpecialProduct props={obj3} />
      <section className="container">
        <h2 className="ps-3">Nashi Stali</h2>
        <div className="row row-cols-4 p-3">
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/home-bg.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem.</p>
                <p>01.17.2003</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/home-bg.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem.</p>
                <p>01.17.2003</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/home-bg.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem.</p>
                <p>01.17.2003</p>
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow bg-light">
              <img src="/home-bg.png" alt="" className="w-100" />
              <div className="p-2">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem.</p>
                <p>01.17.2003</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 p-3">
          <div className="col my-2">
            <div className="card-shadow">
              <div className="row">
                <div className="col-7 p-4">
                  <h5>Lorem, ipsum dolor.</h5>
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
                <img src="/home-bg.png" alt="" className="col-5" />
              </div>
            </div>
          </div>
          <div className="col my-2">
            <div className="card-shadow">
              <div className="row">
                <div className="col-7 p-4">
                  <h5>Lorem, ipsum dolor.</h5>
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
                <img src="/home-bg.png" alt="" className="col-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main">
        <div className="main-div py-5">
          <div className="container  text-center">
            <h1 className="mb-3 text-warning">
              Интернет магазин сертифицированных
            </h1>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae et voluptatem distinctio quibusdam ratione laudantium
              provident? Laborum fuga culpa blanditiis, quam autem sed similique
              quod quasi excepturi dolorum maxime fugit veritatis rem rerum!
              Maiores neque ea sapiente eos corrupti dolor exercitationem
              recusandae similique cum possimus id quia, doloremque esse soluta
              quod alias aspernatur, officiis voluptatum illo mollitia nobis
              optio ullam fuga? Tenetur ut vitae amet quaerat? Voluptates
              molestias quaerat eligendi possimus dolore delectus qui sit magnam
              voluptate reiciendis! Modi recusandae molestias harum eius, quos
              fugiat ut. Rerum consequatur recusandae totam eius id beatae ullam
              est, quibusdam, distinctio dignissimos similique.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home
