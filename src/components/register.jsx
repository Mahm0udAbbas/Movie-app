import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  // console.log(errors.email.type);
  const password = watch("password", "");
  const validateConfirmPassword = (value) => {
    return value === password || "Passwords do not match";
  };
  // console.log(register.ref);
  const [showpass, setShowPass] = useState(false);
  const showPass = () => {
    setShowPass(!showpass);
  };
  const [showConfirmpass, setShowConfirmPass] = useState(false);
  const showConfirmPass = () => {
    setShowConfirmPass(!showConfirmpass);
  };
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className=" align-items-center justify-content-center d-flex flex-column mt-5">
        <h1 className="mb-4 text-primary fs-4">Registeration Form</h1>
        <Form className=" w-25 " onSubmit={handleSubmit()}>
          <Form.Group className="mb-3 text-start" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              {...register("firstName", { required: "Name is required" })}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName.message} </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="emailAdress">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              type="text"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message} </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[^\s]+$/,
                  message: "Spaces are not allowed",
                },
              })}
              type="text"
              placeholder="Enter Username"
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message} </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="d-flex  align-items-center">
              <Form.Control
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                    message: "Enter strong password",
                  },
                })}
                type={showpass ? "text" : "password"}
                placeholder="Password"
              />
              <FontAwesomeIcon
                className="ms-3"
                icon={showConfirmpass ? faEye : faEyeSlash}
                onClick={(e) => {
                  showPass(e);
                }}
              />
            </div>
            {errors.password && (
              <p className="text-danger">{errors.password.message} </p>
            )}
            <p className="text-danger"> </p>
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <div className="d-flex align-items-center ">
              <Form.Control
                type={showConfirmpass ? "text" : "password"}
                {...register("cpassword", {
                  required: "This field is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                    message: "Enter strong password",
                  },
                  validate: validateConfirmPassword,
                })}
                placeholder="confirm Password"
              />
              <FontAwesomeIcon
                className="ms-3"
                icon={showConfirmpass ? faEye : faEyeSlash}
                onClick={() => {
                  showConfirmPass();
                }}
              />
            </div>
            {errors.cpassword && (
              <p className="text-danger">{errors.cpassword.message} </p>
            )}
          </Form.Group>
          <Button variant="success" type="submit" onClick={() => goToLogin()}>
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Register;
