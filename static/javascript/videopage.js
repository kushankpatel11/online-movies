function maximize(element) {
    element.style.height = "100%";
}
function searchInput() {
    let value = document.getElementById('search-bar').value;
    window.location.href = `/searchpage/${value}`;
}
getMovie();
async function getMovie() {
    let idarray = window.location.href.split('/');
    let id = idarray[idarray.length - 1];
    const buffer = await fetch(`https://imdb-api.com/en/API/Title/k_x27qyalf/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`);
    const answer = await buffer.json();
    document.getElementById('main-heading').innerHTML = answer.title;
    console.log(answer);
    displayMovie(answer);

}
function displayMovie(answer) {
    let div = document.getElementById('movie-detail');
    let html = ``;
    html += `<h1 style="color: var(--bs-gray-300);">${answer.title}(${answer.year})</h1>
    <p style="color: var(--bs-gray-300);">${answer.stars}</p>
            <p style="color: var(--bs-white);font-size: 12px;">${answer.wikipedia.plotShort.plainText}</p>
            <p style="color: var(--bs-light);">IMDB Rating: ${answer.imDbRating}</p>
            <p style="color: var(--bs-light);">RunTime: ${answer.runtimeStr}</p>`

    document.getElementById('iframe-main').src = `https://vidclouds.us/${answer.id}.html`;
    div.innerHTML = html;
    document.getElementById('main-movie-image').src = answer.image;
    getRecommandation(answer.title);
}
async function getRecommandation(name) {
    const buffer = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_x27qyalf/${name}`);
    const answer = await buffer.json();
    const div = document.getElementById('#recommendation');
    let html = ``;
    for (var i = 1; i < 5; i++) {
        html += `<div class="col-md-3" style="width: 20%;height: 80%;"><img width="100%" height="100%" src="${answer.image}"></div>`;
    }
    div.innerHTML = html;
}