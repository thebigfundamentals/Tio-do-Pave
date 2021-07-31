const jokesList = document.querySelector('.jokesList');

const getJokes = async () => {
    const response = await axios.get('/api')
    const jokes = await response.data;
    console.log(jokes)
    for (let joke of jokes){
        const li = document.createElement('li');
        li.textContent = joke.line;
        li.className = 'list-group-item';
        jokesList.appendChild(li);
    }
};

getJokes()

