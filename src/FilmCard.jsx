import React from "react";

const FilmCard =({film}) => {
    return(
        <div className="film">
            <div>
                <p>{film.Year}</p>
            </div>

            <div>
                <img src={film.Poster} alt={film.Title}/>
            </div>

            <div>
                <span>{film.Type}</span>
                <h3>{film.Title}</h3>
            </div>
        </div>
    );
}

export default FilmCard;