import { Link } from "react-router-dom";
import cv from '../images/RACHID JAFA.pdf'
function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light-black mt-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4>
              <span id="brand">
                Myportfolio
              </span>
            </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{color:"#fff"}}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "150px" }}
          >
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  <span id="nav-span">Hom</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <span id="nav-span">Products</span>
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/product"
                      id="li-navlink"
                    ></Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link class="nav-link" to="/About">
                <span id="nav-span">About-me</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                <span id="nav-span">Contact-me</span>
                </Link>
              </li>
            </ul> */}
             <a class="btn line-btn-dark btn-icon btn-radius" href={cv}><button className="btn" id="nav-btn">Download cv</button></a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
