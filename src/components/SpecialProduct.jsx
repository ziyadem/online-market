import React from 'react'
import ProductCard from './ProductCard';

const SpecialProduct = ({props}) => {
    let obj = {
      id:1,
      img: "/dastavka.png",
      title: "hanjar",
      size: "19x90",
      structure: "nmadr,Nmadr",
      result:"12 result",
      price:"1200"
    };
  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center px-3">
        <h2>{props.name}</h2>
        <span className="d-flex gap-2 align-items-center">
          <p className="text-primary">{props.site}</p>
          <i className="fa fa-caret-square-o-right text-warning fs-4"></i>
        </span>
      </div>
      <div className="row row-cols-4 p-3">
        <ProductCard props={obj} />
        <ProductCard props={obj} />
        <ProductCard props={obj} />
        <ProductCard props={obj} />
      </div>
    </section>
  );
}

export default SpecialProduct
