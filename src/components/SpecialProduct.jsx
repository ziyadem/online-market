import React from 'react'
import ProductCard from './ProductCard';

const SpecialProduct = ({props}) => {
    let obj = {
      id: 1,
      img: "/fonar-card.png",
      title: "Нож Лиса",
      size: "95х18",
      structure: "Орех, Алюминий",
      result: "12 отзывов",
      price: "1200",
    };
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center px-3">
        <h2>{props.name}</h2>
        <span className="d-flex gap-2 align-items-center">
          <p className="text-secondary">{props.site}</p>
          <i class="fa fa-solid fa-chevron-right text-warning"></i>
        </span>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row row-cols-4 p-3">
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
            </div>
          </div>
          <div class="carousel-item">
            <div className="row row-cols-4 p-3">
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
            </div>
          </div>
          <div class="carousel-item">
            <div className="row row-cols-4 p-3">
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
              <ProductCard props={obj} />
            </div>
          </div>
        </div>

        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active p-1 bg-warning"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="p-1 bg-warning"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="p-1 bg-warning"
          ></button>
        </div>
      </div>
    </section>
  );
}

export default SpecialProduct