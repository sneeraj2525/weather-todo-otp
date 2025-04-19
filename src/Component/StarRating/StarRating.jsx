import React from "react";
import { useState } from "react";
import "../StarRating/StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState("0");
  const [hover, setHover] = useState();

  let arr = new Array(5).fill(0);

  return (
    <div>
      <div className="container">
        <div className="weather-container">
          <h2 className="text-center">Star Rating</h2>
          <div className="star-flex">
            {arr.map((cur, index) => {
              return (
                <span
                  className={index < rating || index < hover ? "colored" : "uncolored"}
                  key={index}
                  onClick={() => setRating(index + 1)}
                  onMouseEnter={() => setHover(index +1)}
                  onMouseLeave={() => setHover(0)}>
                  &#9733;
                </span>
              );
            })}
          </div>
          <p className="text-center">Your Rating : {rating}/5</p>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
