const movieAreaDizm = document.getElementById('movieAreaDizm');
const moviesDizm = ['https://www.youtube.com/embed/Rck5bgqtJ_E', 'https://www.youtube.com/embed/aWUmruZosOU', 'https://www.youtube.com/embed/nEb83-QO70o', 'https://www.youtube.com/embed/gI2jRtVe-Gc', 'https://www.youtube.com/embed/uBfcrqm-NL0'];

const movieNoDizm = Math.floor( Math.random() * moviesDizm.length)
movieAreaDizm.src = moviesDizm[movieNoDizm];



const movieAreaPapav = document.getElementById('movieAreaPapav');
const moviesPapav = ['https://www.youtube.com/embed/xFuUPRdCCQw', 'https://www.youtube.com/embed/wu2YYk1Yhn0', 'https://www.youtube.com/embed/wB6pTo4aE_c', 'https://www.youtube.com/embed/y7mGvnBCUJQ', 'https://www.youtube.com/embed/RnAxLAmN9oo'];

const movieNoPapav = Math.floor( Math.random() * moviesPapav.length)
movieAreaPapav.src = moviesPapav[movieNoPapav];



const movieAreaMuchu = document.getElementById('movieAreaMuchu');
const moviesMuchu = ['https://www.youtube.com/embed/VsDHphApkDw', 'https://www.youtube.com/embed/2v95O14BrSw', 'https://www.youtube.com/embed/PYFzegrqxXY', 'https://www.youtube.com/embed/8TgoW0dc8qw', 'https://www.youtube.com/embed/l8S_W03ASiA'];

const movieNoMuchu = Math.floor( Math.random() * moviesMuchu.length)
movieAreaMuchu.src = moviesMuchu[movieNoMuchu];



const movieAreaTakao = document.getElementById('movieAreaTakao');
const moviesTakao = ['https://www.youtube.com/embed/fMU2Fvz4OBk', 'https://www.youtube.com/embed/OLH0_gK6mwg', 'https://www.youtube.com/embed/cmgbsJF6Xec', 'https://www.youtube.com/embed/yrriNLNbuCs', 'https://www.youtube.com/embed/beDHTvVSJRs'];

const movieNoTakao = Math.floor( Math.random() * moviesTakao.length)
movieAreaTakao.src = moviesTakao[movieNoTakao];



const movieAreaTokiyan = document.getElementById('movieAreaTokiyan');
const moviesTokiyan = ['https://www.youtube.com/embed/U89ttGSIUkQ', 'https://www.youtube.com/embed/0vUFb6mX1a8', 'https://www.youtube.com/embed/xOjASigLyT8', 'https://www.youtube.com/embed/HFNnN6vXiJ4', 'https://www.youtube.com/embed/zIU-K6RE6dk'];

const movieNoTokiyan = Math.floor( Math.random() * moviesTokiyan.length)
movieAreaTokiyan.src = moviesTokiyan[movieNoTokiyan];



const movieAreaUsi = document.getElementById('movieAreaUsi');
const moviesUsi = ['https://www.youtube.com/embed/VwfARxD0r20', 'https://www.youtube.com/embed/TKkqkI-7NLs', 'https://www.youtube.com/embed/mjKr78gjeKo', 'https://www.youtube.com/embed/pJItqUy2O-U', 'https://www.youtube.com/embed/0bk_j28na_0'];

const movieNoUsi = Math.floor( Math.random() * moviesUsi.length)
movieAreaUsi.src = moviesUsi[movieNoUsi];
