let movieData;

let getData = async () => {
    let itemToSearch = document.getElementById('input').value;
    movieData = await fetch(`https://www.omdbapi.com/?apikey=b8a3d31f&s=${itemToSearch}`);
    movieData = await movieData.json();
    if (movieData.Response=="False"){
        let main = document.getElementById('movies');
        main.innerHTML = '';
        let message = document.createElement('h1');
        message.innerHTML = 'Movie Not Found';
        message.className = 'movie_not_found';
        main.appendChild(message);
    }
    else{
        let main = document.getElementById('movies');
        main.innerHTML = '';
        movieData.Search.forEach((element) => {
            let block = document.createElement('div');
            block.innerHTML = `<img src=${element.Poster}><br>
            
            <span>Movie Name - </span><span>${element.Title}</span><br>
            <span> Release Year - </span><span>${element.Year}</span><br>
            <span> IMDB rating - </span><span>${element.imdbID}</span><br>
            <span> Type - </span><span>${element.Type}</span><br>`;
            block.className = 'movie-card';
            main.appendChild(block);
        
        })
    }
}

let button = document.getElementById('submit');
button.onclick = (e) => {
    e.preventDefault();
    getData();
}
