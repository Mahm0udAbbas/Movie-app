import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../Store/slices/favs";
import { setFav } from "../Store/slices/isFav";

export function useFavoriteActions() {
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.isFav.isFav);

  const addToFav = (id, movie) => {
    dispatch(addFav(movie));
    dispatch(setFav({ ...isFav, [id]: true }));
  };

  const removeFromFav = (id) => {
    dispatch(removeFav(id));
    dispatch(setFav({ ...isFav, [id]: false }));
  };
  return { removeFromFav, addToFav, isFav };
}
