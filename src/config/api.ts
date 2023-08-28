const api_properties = {
  API_KEY: 'api_key=55c186acbf23a9e7896b889b6571b147',
  BASE_URL: 'https://api.themoviedb.org/3',
  API_URL:
    'https://api.themoviedb.org/3' +
    '/discover/movie?sort_by=popularity.desc&' +
    'api_key=55c186acbf23a9e7896b889b6571b147',
  IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
};
// should be in .env but it's okay for a demo version
export default api_properties;
