import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./Cart";

const FreshProduct = ({ props, carouselId }) => {
  let obj = {
    id: 1,
    img: "/knife-card.png",
    title: "Нож Лиса",
    size: "95х18",
    structure: "Орех, Алюминий",
    result: "12 отзывов",
    price: "1200",
  };
  return (
    <section className="fresh-product">
      <div className="fresh-product-div">
        <div className="container p-3 pb-4">
          <div className="row">
            <div className="col-12 col-lg-4 text-light">
              <h3>{props.name}</h3>
              <p className="my-3">{props.description}</p>
              <span className="d-flex align-items-center gap-2">
                <Link to="/" className="text-warning">
                  {props.site}
                </Link>
                <i className="fa fa-solid fa-chevron-right text-warning"></i>
              </span>
            </div>
            <div className="col-12 col-lg-8">
              <div
                id={"carouselExampleIndicators" + carouselId}
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row row-cols-1 row-cols-lg-3 p-3">
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-lg-3 p-3">
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-lg-3 p-3">
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                      <ProductCard props={obj} />
                    </div>
                  </div>
                </div>

                <div className="carousel-indicators carousel-indicators-div">
                  <button
                    type="button"
                    data-bs-target={"#carouselExampleIndicators" + carouselId}
                    data-bs-slide-to="0"
                    className="active p-1 bg-warning"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target={"#carouselExampleIndicators" + carouselId}
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="p-1 bg-warning"
                  ></button>
                  <button
                    type="button"
                    data-bs-target={"#carouselExampleIndicators" + carouselId}
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="p-1 bg-warning"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshProduct;
