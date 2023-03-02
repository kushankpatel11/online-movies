async function getResults() {
    let title = window.location.href.split('/')[4];
    console.log(title);
    title = title.replace(/%20/g, " ");
    document.getElementById('search-result-display').innerHTML = `Search Result :-${title}`;
    const buffer = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_x27qyalf/${title}`);
    const answer = await buffer.json();
    console.log(answer);
    displayResult(answer);

}
function searchInput() {
    let value = document.getElementById('search-bar').value;
    window.location.href = `/searchpage/${value}`;
}
function displayResult(answer) {
    let div = document.getElementById('display');
    let n = answer.results.length;
    let row = 0, col = 0;
    if (n % 4 == 0) {
        row = n / 4;
        col = 0;
    }
    else {
        row = n / 4 + 1;
        col = n % 4;
    }
    let curr = 0;
    let html = ``;
    for (var i = 1; i <= n / 4; i++) {
        // console.log(answer.results[curr++].image);
        html += `<div class="row" style="border-color: var(--bs-red);height: 250px;width: 100%;margin-top: 40px;margin-bottom: 40px;">
        <div class="col-md-3" style="width: 25%;height: 100%;"><img onclick="window.location.href='/videoplay/${answer.results[curr].id}'" src="${answer.results[curr].image}" width="100%" height="100%">
        <p style="display:inline;width:'max-content';margin:auto;color:white">${answer.results[curr++].title}</p></div>
        <div class="col-md-3" style="width: 25%;height: 100%;"><img onclick="window.location.href='/videoplay/${answer.results[curr].id}'" src="${answer.results[curr].image}" width="100%" height="100%">
        <p style="display:inline;width:'max-content';margin:auto;color:white">${answer.results[curr++].title}</p></div>
        <div class="col-md-3" style="width: 25%;height: 100%;"><img onclick="window.location.href='/videoplay/${answer.results[curr].id}'" src="${answer.results[curr].image}" width="100%" height="100%">
        <p style="display:inline;width:'max-content';margin:auto;color:white">${answer.results[curr++].title}</p></div>
        <div class="col-md-3" style="width: 25%;height: 100%;"><img onclick="window.location.href='/videoplay/${answer.results[curr].id}'" src="${answer.results[curr].image}" width="100%" height="100%">
        <p style="display:inline;width='max-content';margin:auto;color:white">${answer.results[curr++].title}</p></div>
        </div>`;
    }
    if (col > 0) {
        html += `<div class="row" style="border-color: var(--bs-red);height: 250px;width: 100%;margin-top: 40px;margin-bottom: 40px;">`;
        for (var i = 0; i < col; i++) {
            html += `<div class="col-md-3" style="width: 25%;height: 100%;"><img onclick="window.location.href='/videoplay/${answer.results[curr].id}'" src="${answer.results[curr].image}" width="100%" height="100%">
            <p style="display:inline;width:'max-content';margin:auto;color:white">${answer.results[curr++].title}</p></div>`;
        }
        html += `</div>`
    }
    div.innerHTML = html;
}
getResults();