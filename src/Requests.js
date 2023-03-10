//  On retrouve ci-après, les clés qui me permettent de me connecter à https://www.themoviedb.org

// Ma clé est stockée dans la variable ci-dessous
const API_KEY = process.env.REACT_APP_API_KEY
// cette ligne me permet d'avoir accès à l'url de l' api  
const Requests= {
      requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
      requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
      requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
      requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
      requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default Requests;