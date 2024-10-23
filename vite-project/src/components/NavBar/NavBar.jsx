
import logo from "../../assets/logo.png"; 
import CarWidget from "../CarWidget/CarWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ height: "40px" }} /> {/* Aquí va el logo */}
          Farmacia
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categorias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Consultas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex"  role="search">
            <CarWidget />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
