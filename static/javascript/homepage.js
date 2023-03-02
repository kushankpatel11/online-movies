async function getTopMovies() {
    const buffer = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_x27qyalf');
    const answer = await buffer.json();
    console.log(answer);
    displayPopMov(answer.items);
}
function searchInput() {
    let value = document.getElementById('search-bar').value;
    window.location.href = `/searchpage/${value}`;
}
async function getTopTv() {
    const buffer = await fetch('https://imdb-api.com/en/API/MostPopularTVs/k_x27qyalf');
    const answer = await buffer.json();
    console.log(answer);
    displayPopTv(answer.items);
}

function displayPopTv(answer) {

    let html = ``;
    for (let i = 0; i < 12; i++) {
        html += `<a href="/videoplay/${answer[i].id}"><img src="${answer[i].image}" alt=""></a>`
    }
    document.querySelector('.popTv').innerHTML = html;
}
function displayPopMov(answer) {

    let html = ``;
    for (let i = 0; i < 12; i++) {
        html += `<a href="/videoplay/${answer[i].id}"><img src="${answer[i].image}" alt=""></a>`
    }
    document.querySelector('.popMovies').innerHTML = html;
}
function comingSoon(answer) {

    let html = ``;
    for (let i = 0; i < 12; i++) {
        html += `<a href="/videoplay/${answer[i].id}"><img src="${answer[i].image}" alt=""></a>`
    }
    document.querySelector('.comingSoon').innerHTML = html;
}
getTopMovies();
getTopTv();

