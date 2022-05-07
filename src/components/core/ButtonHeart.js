function ButtonHeart(props) {
  const isFavorite = (valueId) => {
    const favoriteFound = props.favoriteList.find((fav) => {
      return fav.id === valueId;
    });
    if (favoriteFound === undefined) {
      return false;
    } else {
      return true;
    }
  };
  const handleClickFav = (ev) => {
    const valueId = parseInt(ev.target.id);
    const isFav = isFavorite(valueId);
    console.log(valueId);
    props.addListFavorite(valueId, isFav);
  };

  return (
    <i
      className={`fa-heart fa-xl fa-solid movie__icon ${
        props.favorite === true ? "fa-solid" : "fa-regular"
      }`}
      id={props.id}
      onClick={handleClickFav}
    ></i>
  );
}

export default ButtonHeart;
