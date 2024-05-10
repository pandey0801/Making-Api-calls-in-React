// import React, { useState } from 'react';

// import MoviesList from './components/MoviesList';
// import './App.css';

// function App() {
//   const dummyMovies = [
//     {
//       id: 1,
//       title: 'Some Dummy Movie',
//       openingText: 'This is the opening text of the movie',
//       releaseDate: '2021-05-18',
//     },
//     {
//       id: 2,
//       title: 'Some Dummy Movie 2',
//       openingText: 'This is the second opening text of the movie',
//       releaseDate: '2021-05-19',
//     },
//   ];


//   const [moviesState, setMoviesState] = useState(dummyMovies)

//   function fetchHandler () {
//   fetch('https://swapi.dev/api/films/')
//   .then((response)=>{
//     // console.log(Response.json());
//     return response.json();
//   })
//   .then((data)=>
//   {
//     // console.log(data)
//     const transformedMovies = data.results.map(movieData => {
//       return{
//         id: movieData.episode_id,
//         title: movieData.title,
//         openingText: movieData.opening_crawl,
//         releaseDate: movieData.release_data
//       };
     
//     })
     
//     setMoviesState(transformedMovies);
//   })
// }

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchHandler}>Fetch Movies</button>
//       </section>
//       <section>
//         <MoviesList movies={moviesState} />
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;


///////////////////


import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  const [moviesState, setMoviesState] = useState(dummyMovies);

  async function fetchHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      console.log(response.ok);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_data
        };
      });

      setMoviesState(transformedMovies);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesState} />
      </section>
    </React.Fragment>
  );
}

export default App;

