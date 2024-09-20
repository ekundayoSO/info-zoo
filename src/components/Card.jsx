import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {

  // Addition
  const [sheila, setSheila] = useState("");
  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${apiKey}&q=${name}`
        );
        console.log(response);
        const url = response.data.hits[0]?.webformatURL || "";
        setSheila(url);
      } catch (error) {
        console.error("Error fetching image from Pixabay API", error);
      }
    };
    fetchImage();
  }, [name, apiKey]);

  return (
    <div className="card">
      <h2>{name}</h2>
      {/* <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} /> */}
      {/* Addition */}
      <img
        src={sheila}
        alt={name}
        style={{ width: "350px", height: "350px", borderRadius: "10px" }}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-center align-items-center mw-100">
          <button className="btn" onClick={removeLikes}>
            <span className="material-symbols-outlined minus-btn">
              heart_minus
            </span>
          </button>
          <button className="btn">
            <p className="d-inline">{likes}</p>
            <span
              className={`material-symbols-outlined broken-heart d-inline ${
                likes >= 0 ? "d-none" : ""
              }`}
            >
              heart_broken
            </span>
          </button>
          <button className="btn" onClick={addLikes}>
            <span className="material-symbols-outlined plus-btn">
              heart_plus
            </span>
          </button>
          <button
            className="btn position-absolute top-0 end-0"
            onClick={removeCard}
          >
            <span className="material-symbols-outlined cancel-btn">cancel</span>
          </button>
        </div>
        <Link to={name} className="btn btn-primary btn-sm mt-1 mw-100">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
