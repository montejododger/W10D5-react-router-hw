import { useParams } from "react-router-dom";

function MovieDetails(props) {
  const { movieId } = useParams();
  const idToFind = Number(movieId);
  const movieChoice = props.movies.find((movie) => movie.id === idToFind);

  console.log(movieId, idToFind);
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
