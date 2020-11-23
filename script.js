document.getElementById('btn').addEventListener('click', getJokes);

function getJokes(e) {
    const xhr = new XMLHttpRequest();

    let number = document.getElementById('number');


    xhr.open('get', `http://api.icndb.com/jokes/random/${number.value}`, true);

    xhr.onload = function() {

        if(this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            const jokesEl = document.getElementById('jokes');
            
            number.value = '';
            jokesEl.innerHTML = '';

            if(jokes.type == 'success') {
                jokes.value.forEach(joke => {
                    jokesEl.innerHTML += `<li>${joke.joke}</li>`;
                });
            } else {
                jokesEl.innerHTML = 'Something went wrong';
            }
        }
    }

    xhr.send();

    e.preventDefault();
}