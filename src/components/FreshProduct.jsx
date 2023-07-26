import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FreshProduct = ({props}) => {
     let obj = {
       id: 1,
       img: "/dastavka.png",
       title: "hanjar",
       size: "19x90",
       structure: "nmadr,Nmadr",
       result: "12 result",
       price: "1200",
     };
  return (
    <section className="fresh-product">
      <div className="fresh-product-div">
        <div className="container p-3 pb-4">
          <div className="row">
            <div className="col-4 text-light">
              <h3>Novinla</h3>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                praesentium deserunt quasi dolor! Consequuntur, officiis aut.
                Tempore maiores explicabo distinctio a consequatur atque odit ut
                ratione expedita. Aut illo accusamus, laborum magnam fugit,
                dignissimos ab, quia quidem tempore veritatis dicta sunt
                sapiente adipisci doloremque.
              </p>
              <span className="d-flex align-items-center gap-2">
                <Link to="/" className="text-warning">
                  boshqa Novinkalar
                </Link>
                <i className="fa fa-caret-square-o-right text-warning fs-4"></i>
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
