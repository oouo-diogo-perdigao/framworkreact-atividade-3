import React from "react";
import { MoviesService } from "../services/MoviesService";

import { Link } from "react-router-dom";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      console.log(ret);
      setFilmes(ret);
    });
  }, []);

  function _mont(_filmes) {
    console.log("_mont MoviesList");
    if (Object.keys(_filmes).length) {
      let text = [];
      var filmesInterno = _filmes.data.results;
      for (const film in filmesInterno) {
        text.push(
          <Link to={"/film/" + filmesInterno[film].id}>
            {filmesInterno[film].title}
          </Link>
        );
        text.push(<br />);
      }

      return <>{text}</>;
    } else {
      return <>vazio2</>;
    }
  }
  return <>{_mont(filmes)}</>;
};
