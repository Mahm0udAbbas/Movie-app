import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { langContext } from "../contexts/language";
import Search from "./Search";
import { moviesAction } from "../Store/slices/movies";

const Header = () => {
  const dispatch = useDispatch();
  const favArr = useSelector((state) => state.favirots.favArr);
  const { lang, setLang } = useContext(langContext);
  const changeLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <Navbar expand="md" sticky="top" bg="light" className="navbar-light px-3 ">
      <Navbar.Brand>
        <Link to="/movies">
          <img src="./logo.png" height={40} alt="Film App Logo" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto align-items-center">
          {" "}
          <Search />
          <Nav.Item>
            <NavLink
              onClick={() => dispatch(moviesAction(1))}
              to="/movies"
              className="px-4 text-decoration-none  py-2 "
            >
              Movies
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            {favArr.length}
            <FontAwesomeIcon icon={faHeart} className="px-2 text-danger" />
            <NavLink
              to="/favorites"
              className="px-2 text-decoration-none  py-2 "
            >
              Favorites
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/login" className="px-2 text-decoration-none  py-2 ">
              Login
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/register"
              className="px-2 text-decoration-none  py-2 "
            >
              Register
            </NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-center align-items-center">
            <span className="me-2 text-primary text-uppercase">{lang}</span>
            <Form.Select
              size="sm"
              onChange={(e) => changeLang(e.target.value)}
              className=" text-primary"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </Form.Select>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
