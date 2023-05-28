import React, { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import FilmCard from './FilmCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=27ba1f01';
// 27ba1f01


const App = () => {
    const [films,setFilms] = useState([]);
    const [searchDefault, setSearchDefault]= useState(['']);
    const searchFilm = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setFilms(data.Search);
    }
    useEffect(() =>{
        searchFilm("Spiderman")
    }, [])
    return (
        <div className="app">
            <h1>FilmNet</h1>
        

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value= {searchDefault}
                    onChange = {(e) => setSearchDefault(e.target.value)}
                />  
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => searchFilm(searchDefault)}
                />    

            </div>

            {
                films?.length> 0
                ?(
                    <div className="container">
                        {films.map(film => (
                            <FilmCard film ={film}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found!</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;