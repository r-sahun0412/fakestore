import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-black">
              <h1 className="card-title  text float-lg-right">New Season Arrivals</h1>
              <h3 className="card-text fs-5 float-lg-right">
                <i>
                Styles for Every Story .
                </i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
