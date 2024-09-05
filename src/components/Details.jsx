import { useParams } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig/instance";

function Details() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/3/movie/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className="  d-flex align-items-center justify-content-center">
        <div className="w-25">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
              <Card.Body className="movie-card">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between bg-white "></Card.Footer>
              <Card.Body className=""></Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
}

export default Details;
