import "./Movies.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../Store/slices/movies";
import CardPalceholder from "./Card/CardPalceholder";
import MovieCard from "./Card/MovieCard";
import MoviesPagination from "./MoviesPagination";
import { setLoading } from "../../Store/slices/loader";

function Movies() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.loading);
  const movies = useSelector((state) => state.movies.movies);

  //Handles api and getting movies
  useEffect(() => {
    setLoading(true);
    dispatch(moviesAction(page));
    setLoading(false);
  }, [page]);

  return (
    <>
      <Container>
        {loader ? (
          <div className="d-flex justify-content-around">
            <CardPalceholder />
          </div>
        ) : (
          <Row xs={1} md={2} lg={4} className="g-4 mt-3 ">
            {movies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        )}

        <div className="d-flex justify-content-center  mt-5">
          <MoviesPagination setPage={setPage} />
        </div>
      </Container>
    </>
  );
}

export default Movies;
