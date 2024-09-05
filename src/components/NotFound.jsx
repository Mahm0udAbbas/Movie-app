import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div className="card p-4 w-fit d-flex flex-column justify-content-center align-items-center">
        <h3 className="fw-bold fs-xl">Error Page Not Found!!</h3>
        <p className="text-muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
