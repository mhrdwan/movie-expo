// api.js

export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWU5NGZmNTExMWVjMjU2NWEyYWI4NTUxZTdiZDJjNiIsIm5iZiI6MTcxOTgzOTY4MC4zMzU4NjUsInN1YiI6IjY2ODJhMDRkODE2Njg5ZGU3NmNlMTc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Z2oFsm0sySexYuOE6mRCQHw4z0KaISkCoTudTqsC04'
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};


export const fetchPopularMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWU5NGZmNTExMWVjMjU2NWEyYWI4NTUxZTdiZDJjNiIsIm5iZiI6MTcxOTgzOTY4MC4zMzU4NjUsInN1YiI6IjY2ODJhMDRkODE2Njg5ZGU3NmNlMTc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Z2oFsm0sySexYuOE6mRCQHw4z0KaISkCoTudTqsC04'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  };

export const fetchNowTV = async () => {
    const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWU5NGZmNTExMWVjMjU2NWEyYWI4NTUxZTdiZDJjNiIsIm5iZiI6MTcxOTgzOTY4MC4zMzU4NjUsInN1YiI6IjY2ODJhMDRkODE2Njg5ZGU3NmNlMTc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Z2oFsm0sySexYuOE6mRCQHw4z0KaISkCoTudTqsC04'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  };


  export const fetchDetailMov = async (idvMov) => {
    const url = `https://api.themoviedb.org/3/movie/${idvMov}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWU5NGZmNTExMWVjMjU2NWEyYWI4NTUxZTdiZDJjNiIsIm5iZiI6MTcxOTgzOTY4MC4zMzU4NjUsInN1YiI6IjY2ODJhMDRkODE2Njg5ZGU3NmNlMTc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Z2oFsm0sySexYuOE6mRCQHw4z0KaISkCoTudTqsC04'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  };
  export const fetchVidList = async (idvMov) => {
    const url = `https://api.themoviedb.org/3/movie/${idvMov}/videos?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWU5NGZmNTExMWVjMjU2NWEyYWI4NTUxZTdiZDJjNiIsIm5iZiI6MTcxOTgzOTY4MC4zMzU4NjUsInN1YiI6IjY2ODJhMDRkODE2Njg5ZGU3NmNlMTc5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Z2oFsm0sySexYuOE6mRCQHw4z0KaISkCoTudTqsC04'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  };