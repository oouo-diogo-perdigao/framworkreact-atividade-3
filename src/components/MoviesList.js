import React from "react";
import { MoviesService } from "../services/MoviesService";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      setFilmes(ret);
      console.log(ret);
    });
  }, []);

  function _mont(_filmes) {
    if (Object.keys(_filmes)) {
      let text = [];
      console.log(_filmes);
      //var filmesInterno = _filmes.data.results;
      //   for (const film in filmesInterno) {
      //     console.log(filmesInterno);
      //     console.log(filmesInterno[film].title);
      //     text.push(<span>{filmesInterno[film].title}</span>);
      //   }
      //return text;
    } else {
      return <>vazio</>;
    }
  }
  console.log(filmes);
  return <>{_mont(filmes)}</>;
};
