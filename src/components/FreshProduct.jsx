import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FreshProduct = ({props}) => {
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
            <div className="col-4 text-light">
              <h3>{props.name}</h3>
              <p className="my-3">
                {props.description}
              </p>
              <span className="d-flex align-items-center gap-2">
                <Link to="/" className="text-warning">
                  {props.site}
                </Link>
                <i class="fa fa-solid fa-chevron-right text-warning"></i>
              </span>
            </div>
            <div className="col-8">
              <div className="row row-cols-3 p-3">
                <ProductCard props={obj} />
                <ProductCard props={obj} />
                <ProductCard props={obj} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreshProduct
