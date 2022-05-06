import "../styles/PageNotFound.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notfound">
      <p>
        WOw!! Has llegado a un mundo desconocido,... mejor regresa al inicio
      </p>
      <Link to={"/"} className="notfound__link">
        <i className="fa-solid fa-arrow-left fa-2xl detail__icon"></i>
      </Link>
    </div>
  );
}
export default PageNotFound;
