
const jokeButton = document.querySelector('#jokeButton');
const jokeDisplay = document.querySelector('.joke');


const getJoke = async () => {

    const response = await axios.get('/api')
    const randomJoke = await response.data[Math.floor(Math.random() * response.data.length)];
    return randomJoke.line
}

const jokeHandler = async () => {
    jokeDisplay.textContent = await getJoke()
}

jokeButton.addEventListener('click', jokeHandler)

