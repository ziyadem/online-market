import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Categorys = () => {
  let navigation=useNavigate()
  return (
    <>
      <Header />
      <section className="container py-4">
        <div className="d-flex justify-content-between">
          <h3>Categorys</h3>
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
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
          <div
            className="col my-2"
            onClick={() => navigation("/categorys/Разделочные ножи")}
          >
            <div className="card-shadow bg-light">
              <img src="/knife-card7.png" alt="" className="w-100" />
              <h5 className="p-3 text-center">Разделочные ножи</h5>
            </div>
          </div>
        
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Categorys
