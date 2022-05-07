import "../../styles/core/ButtonReset.scss";
import { Link } from "react-router-dom";

function ButtonFavorite() {
  return (
    <Link to={"/favoritos"} title="ir a listado de favoritos">
      <button className="button__reset">Favoritos</button>
    </Link>
  );
}

export default ButtonFavorite;
