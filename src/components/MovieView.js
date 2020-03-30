import React from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

export const MovieView = props => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    console.log(props);
    MoviesService.getPopularMovie(props.movieId).then(ret => {
      setFilmes(ret);
    });
  }, []);

  function _mont(data) {
    if (Object.keys(data).length) {
      let movie = data.data;
      console.log(movie);
      return (
        <>
          <main>
            <h1>{movie.title}</h1>
            <Link to="../../">Voltar</Link>
            <br />
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            ></img>
            <p>{movie.overview}</p>
          </main>
        </>
      );
    } else {
      return <>Carregando</>;
    }
  }
  return <>{_mont(filmes)}</>;
};
