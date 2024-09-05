import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ToDoApp = () => {
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };
  const handleAddTask = () => {
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };
  const handleToggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="mt-5 container">
        <div
          style={{ backgroundColor: "skyblue" }}
          className="mt-5 py-5 text-white fw-bold text-end px-5  "
        >
          <h1 className="pe-5 mb-4">To-Do App!</h1>
          <Form className=" pe-5 " onSubmit={handleSubmit()}>
            <Form.Group className="mb-3 text-end" controlId="firstName">
              <Form.Label>Add New To-Do</Form.Label>
              <Form.Control
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter new Task"
              />
            </Form.Group>
            <Button
              variant="outline-light"
              className="fw-bold"
              onClick={() => {
                handleAddTask();
              }}
            >
              Add
            </Button>
          </Form>
        </div>
        <div>
          <h3 className="text-secondary py-5">Let us get some work done!</h3>
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className=" pe-5 d-flex align-items-center justify-content-center mb-3"
              >
                <FontAwesomeIcon
                  className=" mx-5 fs-3 text-success "
                  icon={faCircleCheck}
                  onClick={() => handleToggleDone(index)}
                />
                <FontAwesomeIcon
                  className=" mx-5 fs-3 "
                  icon={faTrash}
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                />
                <div
                  className="border rounded-2 d-flex align-items-center p-2 "
                  style={{
                    width: "30%",
                    height: "40px",
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </div>
              </div>
            );
          })}
        </div>
        <footer className="py-5 my-5 bg-secondary">
          <h6 className="text-center text-muted ">Copyright &copy; MA 2024</h6>
        </footer>
      </div>
    </>
  );
};

export default ToDoApp;
