import Cart from "./Cart"

const ProductList = () => {
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
    <section className="container py-4">
      <div className="d-flex justify-content-between">
        <h3>Products</h3>
        <div className="pt-1 pb-1 ps-3 rounded search-div  text-dark  w-lg-25 d-flex align-items-center">
          <i className="fa fa-search text-black pe-2"></i>
          <input
            type="text"
            className="search-input w-100"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 p-3">
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
        <Cart props={obj} />
      </div>
    </section>
  );
};

export default ProductList;
