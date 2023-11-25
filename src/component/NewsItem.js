import React, { Component } from "react";

const NewsItem=(props)=>{
 
    let { Title, description, imageurl, newsurl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>

          <img
            className="card-img-top"
            src={
              imageurl == null
                ? "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg"
                : imageurl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{Title} </h5>
            <p className="card-text">{description} </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {" "}
                By:- {!author ? "Unknown" : author} on:-{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
