import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { langContext } from "../contexts/language";

const Header = () => {
  const favArr = useSelector((state) => state.favirots.favArr);
  const { lang, setLang } = useContext(langContext);
  const changeLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };
  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        className="bg-body-tertiary navbar-light"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Brand href="#home" className="ps-3"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="pe-3" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            defaultActiveKey="/home"
            as="ul"
            className="m-0 px-0 gx-0 navbar navbar-expand-lg "
          >
            <Nav.Item>
              <Nav.Link eventKey="">
                <Link to="/movies" style={{ textDecoration: "none" }}>
                  Movies
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="">
                {favArr.length}
                <FontAwesomeIcon icon={faHeart} className="px-2 text-danger" />
                <Link style={{ textDecoration: "none" }} to="/favorites">
                  Favorites
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="">
                <Link style={{ textDecoration: "none" }} to="/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="">
                <Link style={{ textDecoration: "none" }} to="/register">
                  Register
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link
                eventKey=""
                className="d-flex align-items-center justify-content-center"
              >
                <span className="me-2">{lang}</span>
                <Form.Select
                  size="sm"
                  onChange={() => changeLang()}
                  className="bg-dark text-primary"
                >
                  <option>English</option>
                  <option>Arabic</option>
                </Form.Select>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
