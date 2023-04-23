import React from "react";
import ReactStars from "react-rating-stars-component";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MovieCard({ el }) {
  return (
    <div className="card">


      <img src={el.posterurl} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>{el.name}</h4>
        
      </div>
      
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactStars
          count={5}
          size={24}
          activeColor="yellow"
          edit={false}
          value={el.rating}
        />
        
      </div>
      <div style={{textAlign: "center"}}>
        <Link to={`/trailer/${el.name}`}
        style={{ textDecoration:"none", color:"black"}}>
        <Button
        variant="dark"
        style={{ backgroundColor: "#FFD700", color: "white", border: "none" }}
      >
        See trailer
      </Button>
      </Link>
      </div>
     
      
    </div>
  );
}

export default MovieCard;