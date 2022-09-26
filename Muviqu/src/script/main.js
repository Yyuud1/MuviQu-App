const base_url = 'https://api.themoviedb.org/3';
const api_key = 'api_key=2a7be83c02167b3818d1eebaac9ca79c';
const img_url = 'https://image.tmdb.org/t/p/w500';
const search_url = `${base_url}/search/movie?${api_key}`;
const formSearch = document.getElementById('form-search');
const inputSearch = document.getElementById('input-search');

const main = () => {

    const getMovies = (dataUrl) => {
        fetch(dataUrl)
        .then(resp => {return resp.json()})
        .then(respJson => {
            const result = respJson.results;
            showMovies(result);
        })
        .catch(error => console.log(error.responseText));
    }
    getMovies(`${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`);

    const showMovies = dataResult => {
        let cards = '';
        dataResult.forEach(dataMovie => {
            const {poster_path, id} = dataMovie;
            cards += ` <div class="col-md-3">
                        <div class="card mt-2 card-item">
                            <img src="${img_url+poster_path}" class="card-img-top" alt="...">
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <div class="text">
                                    <h5 class="card-title">${dataMovie.original_title}</h5>
                                    <a 
                                         href="#" 
                                         class="btn text-white btn-details" 
                                         id="movie-details"
                                         data-bs-toggle="modal"
                                         data-bs-target="#detailMovie"
                                         onclick = "console.log(${id})"
                                         >
                                         Details
                                    </a>
                                </div>
                                <div class="button-card">
                                    <p class="card-text">${dataMovie.release_date}</p>
                                    <span class=" m-2 bg-dark p-1 text-white">R ${dataMovie.vote_average}<span>
                                </div>
                            </div>
                        </div>
                    </div> `;
        })
        document.querySelector('.movie-list').innerHTML = cards;
    }

    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = inputSearch.value;

        if(inputValue){
            getMovies(`${search_url}&query=${inputValue}`);
            document.getElementById('home').style.display = 'none';
        }else {
            getMovies(`${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`)
            document.getElementById('home').style.display = 'block';
        }
    });
    
}

export default main;