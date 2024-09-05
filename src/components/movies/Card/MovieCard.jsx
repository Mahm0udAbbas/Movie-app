import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../../Store/slices/favs";
import { setFav } from "../../../Store/slices/isFav";
import { useFavoriteActions } from "../../../hooks/useFavoritsActions";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { id, title, overview } = movie;
  const { isFav, addToFav, removeFromFav } = useFavoriteActions();
  //state to check favorite movies
  // handling details button
  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
      />
      <Card.Body className="movie-card">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between bg-white ">
        {isFav[id] ? (
          <FontAwesomeIcon
            onClick={() => {
              removeFromFav(movie.id);
            }}
            icon={faHeartCircleCheck}
            className="text-danger "
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              addToFav(movie.id, movie);
            }}
            icon={faHeart}
            className="text-danger "
            style={{ cursor: "pointer" }}
          />
        )}
      </Card.Footer>
      <Card.Body className="">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            goToDetails(movie.id);
          }}
        >
          Details
        </button>
      </Card.Body>
    </Card>
  );
}
