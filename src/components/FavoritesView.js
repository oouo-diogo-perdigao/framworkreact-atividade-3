import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesRemove } from "../actions/favoritesActions";

export const FavoritesView = () => {
  const selector = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <>
      {selector.favorites.map(id => {
        console.log(id);
        return (
          <p key={id}>
            <Link to={"/film/" + id}>
              {/* {f.title} */}
              {id}
            </Link>
            <button onClick={() => dispatch(favoritesRemove(id))}>
              Remove Favorites
            </button>
          </p>
        );
      })}
    </>
  );
};
