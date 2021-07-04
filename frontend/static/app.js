const keywordInput = document.querySelector('#keywordInput');
const jokeButton = document.querySelector('#jokeButton');
const jokeDisplay = document.querySelector('.joke');
const totalJokes = document.querySelector('.totalJokes');

const getValue = (element) => {
    return element.value
};

const getKeyword = async () => {
    const keyword = { keyword: getValue(keywordInput) };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyword),
    };

    const response = await fetch('/keyword', options);
    const data = await response.json();

    if (data.length === 0) {
        return `Ops! Ainda não temos nenhuma piada contendo "${getValue(keywordInput)}".`
    }

    const keywordJoke = await data[Math.floor(Math.random() * data.length)];
    return keywordJoke.line
}

const getJoke = async () => {
    if (!getValue(keywordInput)) {
        const response = await axios.get('/api')
        const randomJoke = await response.data[Math.floor(Math.random() * response.data.length)];
        return randomJoke.line
    };

    return getKeyword();
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
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        jokeButton.click();
    }
});
window.addEventListener('DOMContentLoaded', displayTotalJokes)
