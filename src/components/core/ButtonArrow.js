import "../../styles/core/ButtonArrow.scss";
import { Link } from "react-router-dom";

function ButtonArrow(props) {
  return (
    <Link to={"/"} className={props.classLink} title="volver al incicio">
      <i className="fa-solid fa-arrow-left arrow fa-2xl "></i>
    </Link>
  );
}

export default ButtonArrow;
