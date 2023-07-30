import React from 'react'

const Information = ({props}) => {    
  return (
    <div>
      <section className="section-last">
        <div className="section-last-div py-5">
          <div className="container  text-center">
            <h1 className="mb-3 text-warning">
              {props.title}
            </h1>
            <p className="text-light">
              {props.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information
