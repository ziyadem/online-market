import React from 'react'

const Articles = () => {
  return (
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
  );
}

export default Articles
