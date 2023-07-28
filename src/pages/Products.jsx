import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const Products = () => {
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
    <>
      <Header />
      <section className="container py-4">
        <div className="d-flex justify-content-between">
          <h3 >Products</h3>
          <div className="pt-1 pb-1 ps-3 rounded search-div  text-dark  w-lg-25 d-flex align-items-center">
            <i className="fa fa-search text-black pe-2"></i>
            <input type="text" className="search-input w-100" placeholder="Поиск" />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 p-3">
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
      </section>
      <Footer />
    </>
  );
}

export default Products
