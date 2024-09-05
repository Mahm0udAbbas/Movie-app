import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axiosInstance from "../axiosConfig/instance";
import { useDispatch } from "react-redux";
import { setMovies } from "../Store/slices/movies";
export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query) return;
    // perform search operation here
    const res = await axiosInstance.get("/3/search/movie", {
      params: { query },
    });

    dispatch(setMovies(res.data.results));
    setQuery("");
  };

  return (
    <Form inline>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleSearchChange}
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
