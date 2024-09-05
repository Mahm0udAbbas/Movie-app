import "./Movies.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction, setMovies } from "../../Store/slices/movies";
import CardPalceholder from "./Card/CardPalceholder";
import MovieCard from "./Card/MovieCard";
import MoviesPagination from "./MoviesPagination";
import { setLoading } from "../../Store/slices/loader";

function Movies() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  //Handles api and getting movies
  useEffect(() => {
    dispatch(moviesAction(page));
  }, [page, dispatch]);

  return (
    <>
      <Container className="h-100">
        {movies.length === 0 ? (
          <div className="h-100 d-flex justify-content-center align-items-center">
            <h1 className="text-primary">There is no movies!!</h1>
          </div>
        ) : (
          <>
            <Row xs={1} md={2} lg={4} className="g-4 mt-3 ">
              {movies.map((movie) => (
                <Col key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-center  mt-3">
              <MoviesPagination setPage={setPage} />
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default Movies;
