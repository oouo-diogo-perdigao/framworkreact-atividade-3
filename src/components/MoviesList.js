import React from "react";
import { MoviesService } from "../services/MoviesService";

import { Link } from "react-router-dom";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState([]);

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      console.log(ret);
      setFilmes(ret.data.results);
    });
  }, []);

  return (
    <>
      {filmes.map(f => (
        <p key={f.id}>
          <Link to={"/film/" + f.id}>{f.title}</Link>
        </p>
      ))}
    </>
  );

  //   return <>{_mont(filmes)}</>;
};
