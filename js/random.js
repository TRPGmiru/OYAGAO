const movieAreaDizm = document.getElementById('movieAreaDizm');
const moviesDizm = ['https://youtu.be/TKkqkI-7NLs', 'https://youtu.be/aWUmruZosOU', 'https://t.co/rD7f19ttaE?amp=1', 'https://t.co/lMsPvkAyo4?amp=1', 'https://youtu.be/gI2jRtVe-Gc'];

const movieNoDizm = Math.floor( Math.random() * moviesDizm.length)
movieAreaDizm.src = moviesDizm[movieNoDizm];



const movieAreaPapav = document.getElementById('movieAreaPapav');
const moviesPapav = ['https://youtu.be/wB6pTo4aE_c', 'https://youtu.be/y7mGvnBCUJQ', 'https://t.co/OteAthEF2k?amp=1', 'https://youtu.be/ZLLJVKM-7lg', 'https://youtu.be/wu2YYk1Yhn0'];

const movieNoPapav = Math.floor( Math.random() * moviesPapav.length)
movieAreaPapav.src = moviesPapav[movieNoPapav];



const movieAreaMuchu = document.getElementById('movieAreaMuchu');
const moviesMuchu = ['https://youtu.be/48K1MbWtpH4', 'https://t.co/LnqnrtGX7j?amp=1', 'https://youtu.be/2v95O14BrSw', 'https://youtu.be/PYFzegrqxXY', 'https://youtu.be/8TgoW0dc8qw'];

const movieNoMuchu = Math.floor( Math.random() * moviesMuchu.length)
movieAreaMuchu.src = moviesMuchu[movieNoMuchu];



const movieAreaTakao = document.getElementById('movieAreaTakao');
const moviesTakao = ['https://youtu.be/cmgbsJF6Xec', 'https://t.co/LnqnrtGX7j?amp=1', 'https://youtu.be/yrriNLNbuCs', 'https://youtu.be/beDHTvVSJRs', 'https://t.co/gnviPlln4F?amp=1'];

const movieNoTakao = Math.floor( Math.random() * moviesTakao.length)
movieAreaTakao.src = moviesTakao[movieNoTakao];



const movieAreaTokiyan = document.getElementById('movieAreaTokiyan');
const moviesTokiyan = ['https://youtu.be/0vUFb6mX1a8', 'https://youtu.be/U89ttGSIUkQ', 'https://t.co/Dl8POtJOLO?amp=1', 'https://t.co/bbpPFWzXda?amp=1', 'https://t.co/6BFVjB35Ns?amp=1'];

const movieNoTokiyan = Math.floor( Math.random() * moviesTokiyan.length)
movieAreaTokiyan.src = moviesTokiyan[movieNoTokiyan];



const movieAreaUsi = document.getElementById('movieAreaUsi');
const moviesUsi = ['https://www.youtube.com/watch?v=VwfARxD0r20', 'https://youtu.be/1f3qhZNS0_c', 'https://youtu.be/mjKr78gjeKo', 'https://youtu.be/mxZQ4TWkRJY', 'https://t.co/NqeTjMY2XM?amp=1'];

const movieNoUsi = Math.floor( Math.random() * moviesUsi.length)
movieAreaUsi.src = moviesUsi[movieNoUsi];