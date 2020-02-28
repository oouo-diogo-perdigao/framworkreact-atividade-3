import React from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesAdd, favoritesRemove } from "../actions/favoritesActions";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState([]);

  const dispatch = useDispatch();
  const selector = useSelector(state => state.favorites);

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      console.log(ret);
      setFilmes(ret.data.results);
    });
  }, []);

  console.log(selector);
  return (
    <>
      {filmes.map(f => (
        <p key={f.id}>
          <Link to={"/film/" + f.id}>{f.title}</Link>
          {selector.favorites.indexOf(f.id) !== -1 ? (
            <button onClick={() => dispatch(favoritesRemove(f.id))}>
              Remove Favorites
            </button>
          ) : (
            <button onClick={() => dispatch(favoritesAdd(f.id))}>
              Add Favorites
            </button>
          )}
        </p>
      ))}
    </>
  );
};
