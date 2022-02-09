export const apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey:'fd922be3276e0c686293e46cf44f0e9e',
    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original${imgPath} `,
    w500:(imgPath) => `https://image.tmdb.org/t/p/w500${imgPath} `
}