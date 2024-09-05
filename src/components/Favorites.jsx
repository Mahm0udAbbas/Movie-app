import { faHeartCircleCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useFavoriteActions } from "../hooks/useFavoritsActions";

function Fav() {
  const favArr = useSelector((state) => state.favirots.favArr);
  const { removeFromFav } = useFavoriteActions();
  return (
    <>
      <Container>
        <Row xs={1} md={3} lg={3} className="g-4 ">
          {favArr.map((fav) => {
            return (
              <Col key={fav.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${fav.backdrop_path}`}
                  />
                  <Card.Body className="movie-card">
                    <Card.Title>{fav.title}</Card.Title>
                    <Card.Text>{fav.overview}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between bg-white ">
                    <FontAwesomeIcon
                      icon={faHeartCircleCheck}
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                    />
                    <FontAwesomeIcon
                      onClick={() => {
                        removeFromFav(fav.id);
                      }}
                      icon={faTrash}
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                    />
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Fav;
