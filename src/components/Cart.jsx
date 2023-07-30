import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = ({props}) => {
  let navigation= useNavigate()
  const dispatch = useDispatch()
    function handleAddItemToCart(product) {
      dispatch({ type: "ADD_ITEM_TO_CART", payload: product });
    }
  return (
    <div className="col my-2">
      <div className="card-shadow p-3 bg-light">
        <img src={props.img} alt="knife" className="w-100" />
        <h2
          className="cart-title"
          onClick={() => navigation(`/products/${props.title}`)}>
          {props.title}
        </h2>
        <span className="d-flex justify-content-between mt-2">
          <p>{props.size}</p>
          <p>{props.structure}</p>
        </span>
        <span className="d-flex justify-content-between align-items-center my-2">
          <span className="d-flex gap-1">
            <i className="fa fa-solid fa-star text-warning"></i>
            <i className="fa fa-solid fa-star text-warning"></i>
            <i className="fa fa-solid fa-star text-warning"></i>
            <i className="fa fa-solid fa-star text-warning"></i>
          </span>
          <p>{props.result}</p>
        </span>
        <hr />
        <span className="d-flex justify-content-between align-items-center my-2">
          <p>{props.price}</p>
          <span className="d-flex gap-2">
            <i className="fa  fa-scale-balanced text-black"></i>
            <img src="/torozi.png" alt="" />
            <i className="fa fa-solid fa-scale-unbalanced-flip"></i>
            <i className="fa fa-heart-o fs-3 text-warning"></i>
          </span>
        </span>
        <div
          className="btn btn-warning text-light w-100 d-flex justify-content-center gap-2 align-items-center"
          onClick={() => handleAddItemToCart(props)}
        >
          <p>В корзину</p>
          <i className="fa fa fa-cart-plus fs-2"></i>
        </div>
      </div>
    </div>
  );
}

export default Cart
