import "../../styles/core/ButtonReset.scss";

function ButtonReset(props) {
  const handleClickBtn = () => {
    props.handleReset();
  };
  return (
    <button className="button__reset" onClick={handleClickBtn}>
      Reset
    </button>
  );
}
export default ButtonReset;
