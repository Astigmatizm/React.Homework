import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  let { id } = useParams();
  const titleRef = useRef(null);

  return (
    <div>
      <h1 ref={titleRef}>Детали фильма {id}</h1>
    </div>
  );
}

export default MovieDetails;