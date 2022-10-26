import "./MenuBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Image } from "react-bootstrap";

const MenuBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <h1 className="text-success">
                LWith<span style={{ color: "orange" }}>SHEJAN</span>
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
                <Link className="items d-flex">
                  <h3 style={{ color: "orange" }}>{user?.displayName}</h3>
                  <>
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "40px" }}
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser />
                    )}
                  </>
                </Link>
                {/* <Link className="items">
                  
                </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
