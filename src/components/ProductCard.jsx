import React from 'react'

const ProductCard = ({props}) => {
    console.log(props);
  return (
    <div className="col my-2">
      <div className="card-shadow p-3 bg-light">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <span className="d-flex justify-content-between mt-2">
          <p>{props.size}</p>
          <p>{props.structure}</p>
        </span>
        <span className="d-flex justify-content-between my-2">
          <span className="d-flex gap-1">
            <i className="fa fa-heart-o fs-3 text-warning"></i>
            <i className="fa fa-heart-o fs-3 text-warning"></i>
            <i className="fa fa-heart-o fs-3 text-warning"></i>
            <i className="fa fa-heart-o fs-3 text-warning"></i>
          </span>
          <p>{props.result}</p>
        </span>
        <hr />
        <span className="d-flex justify-content-between align-items-center my-2">
          <p>{props.price}</p>
          <span className="d-flex gap-2">
            <i className="fa fa-heart-o fs-3 text-black"></i>
            <i className="fa fa-heart-o fs-3 text-warning"></i>
          </span>
        </span>
        <div className="btn btn-warning text-light w-100 d-flex justify-content-center gap-2 align-items-center">
          <p>B Karzinku</p>
          <i class="fa fa fa-cart-plus fs-2"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
