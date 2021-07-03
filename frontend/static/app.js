
const jokeButton = document.querySelector('#jokeButton');
const jokeDisplay = document.querySelector('.joke');
const totalJokes = document.querySelector('.totalJokes');


const getJoke = async () => {

    const response = await axios.get('/api')
    const randomJoke = await response.data[Math.floor(Math.random() * response.data.length)];
    return randomJoke.line
}

const getTotalJokes = async () => {
    const response = await axios.get('/api');
    const numberOfJokes = await response.data.length;
    return numberOfJokes
}

const displayTotalJokes = async () => {
    const numberOfJokes = await getTotalJokes();
    totalJokes.textContent = `Total de piadas registradas: ${await numberOfJokes}`;
}

const jokeHandler = async () => {
    jokeDisplay.textContent = await getJoke()
}

jokeButton.addEventListener('click', jokeHandler)
window.addEventListener('DOMContentLoaded', displayTotalJokes)
