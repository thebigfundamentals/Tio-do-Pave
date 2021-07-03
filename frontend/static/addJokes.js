const newJokeButton = document.querySelector('#newJokeButton');
const newJokeInput = document.querySelector('#newJokeInput');

const getValue = (element) => {
    return element.value
}

class Joke {
    constructor(line) {
        this.line = line
    }
};

const saveJoke = async (jokeToBeSaved) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeToBeSaved),
    };

    const response = await fetch('/api', options);
    const data = await response.json();
    return data
};

const clickHandler = async () => {
    if (!getValue(newJokeInput)) {
        alert('Por favor, preencha o campo com uma piada nova.')
        return
    }
    const newJoke = new Joke(getValue(newJokeInput));
    saveJoke(newJoke);
    newJokeInput.value = "";
    console.log('Piada salva')
}

newJokeButton.addEventListener('click', clickHandler)

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        newJokeButton.click();
    }
});