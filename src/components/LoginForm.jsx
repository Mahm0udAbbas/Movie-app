import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailErrors: "",
    passwordErrors: "",
  });
  const [showpass, setShowPass] = useState(false);
  const showPass = () => {
    setShowPass(!showpass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleInputChange = (e) => {
    if (e.target.name == "email") {
      setUser({ ...user, email: e.target.value });
      setErrors({
        ...errors,
        emailErrors:
          e.target.value.length == 0
            ? "email is Required"
            : e.target.value.includes("@")
            ? ""
            : "Enter a valid email Format",
      });
    } else if (e.target.name == "password") {
      setUser({ ...user, password: e.target.value });
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      setErrors({
        ...errors,
        passwordErrors:
          e.target.value.length == 0
            ? "Password is Required"
            : pattern.test(e.target.value)
            ? ""
            : "Enter a strong pasword",
      });
    }
  };
  const navigate = useNavigate();
  const goToMovies = () => {
    navigate("/movies");
  };
  return (
    <>
      <div className=" align-items-center justify-content-center d-flex flex-column">
        <h1 className="mb-4 text-primary fs-4">Login Form</h1>
        <Form
          className=" w-25 "
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={user.email}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <p className="text-danger">{errors.emailErrors} </p>
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showpass ? "text" : "password"}
              name="password"
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={user.password}
              placeholder="Password"
            />
            <FontAwesomeIcon
              className="mt-3"
              icon={faEyeSlash}
              onClick={() => {
                showPass();
              }}
            />
            <p className="text-danger">{errors.passwordErrors} </p>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={() => goToMovies()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
