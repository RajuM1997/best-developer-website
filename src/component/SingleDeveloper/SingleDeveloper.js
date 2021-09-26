import React from "react";
import "./SingleDeveloper.css";

const SingleDeveloper = (props) => {
  const { name, image, ln, projectPrice, quality, projectDone, email } =
    props.developer;
  return (
    <div className="col-md-4 single-developer">
      <div className="col">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">
              <i>Name: {name}</i>
            </h4>
            <p className="card-text">
              <small>
                Language: <span>{ln}</span>
              </small>
            </p>
            <p className="card-text">
              <small className="project-title">
                Completed Project:{" "}
                <span className="project">{projectDone}</span>
              </small>
            </p>
            <p className="card-text">
              <small className="project-price">
                Project Price: $<span className="price">{projectPrice}</span>
              </small>
            </p>

            <p>
              <small>
                Email: <span>{email}</span>
                <i className="fas fa-envelope email"></i>
              </small>
            </p>
            <p>
              <small>
                Project Review: <span className="quality">{quality}</span>
              </small>
            </p>
          </div>
          <div className="card-footer">
            <button
              onClick={() => props.handleDeveloper(props.developer)}
              className="addDeveloper"
            >
              {" "}
              <i class="fas fa-shopping-cart"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDeveloper;
