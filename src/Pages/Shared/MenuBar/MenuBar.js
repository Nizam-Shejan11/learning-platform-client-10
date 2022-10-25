import "./MenuBar.css";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <h1 className="text-success">
                LearnWith<span style={{ color: "orange" }}>SHEJAN</span>
              </h1>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>Courses</li>
                </Link>
                <Link to="/blogs" className="items">
                  <li>Blogs</li>
                </Link>
                <Link to="/login" className="items">
                  <li>Log in</li>
                </Link>
                <Link to="/register" className="items">
                  <li>Register</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
