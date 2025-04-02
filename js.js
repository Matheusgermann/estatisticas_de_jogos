const form = document.getElementById('register-form');
const gameNameInput = document.getElementById('game-name');
const gameGenreSelect = document.getElementById('game-genre');
const gameHoursInput = document.getElementById('game-hours');
const gamesList = document.getElementById('games-list');

const adventureCell = document.querySelector('#aventura td:last-child');
const sportCell = document.querySelector('#esporte td:last-child');
const fpsCell = document.querySelector('#fps td:last-child');
const rpgCell = document.querySelector('#rpg td:last-child');
const strategyCell = document.querySelector('#estrategia td:last-child');
const mobaCell = document.querySelector('#moba td:last-child');
const battleroyaletCell = document.querySelector('#battleroyale td:last-child');

function updateStats(genre, hours) {
    switch (genre) {
        case 'aventura':
            adventureCell.textContent = parseInt(adventureCell.textContent) + hours;
            break;
        case 'esporte':
            sportCell.textContent = parseInt(sportCell.textContent) + hours;
            break;
        case 'fps':
            fpsCell.textContent = parseInt(fpsCell.textContent) + hours;
            break;
        case 'rpg':
            rpgCell.textContent = parseInt(rpgCell.textContent) + hours;
            break;
        case 'estrategia':
            strategyCell.textContent = parseInt(strategyCell.textContent) + hours;
            break;
        case 'moba':
            mobaCell.textContent = parseInt(mobaCell.textContent) + hours;
            break;
        case 'battleroyale':
            battleroyaletCell.textContent = parseInt(battleroyaletCell.textContent) + hours;
            break;
    }
}

function addGameToList(name, genre, hours) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${genre.charAt(0).toUpperCase() + genre.slice(1)}</td>
        <td>${hours}</td>
    `;
    row.style.backgroundColor = getGenreColor(genre);
    gamesList.appendChild(row);
}

function getGenreColor(genre) {
    switch (genre) {
        case 'aventura':
            return '#FFB6C1';
        case 'esporte':
            return '#ADD8E6';
        case 'fps':
            return '#BDECB6';
        case 'rpg':
            return '#DDA0DD';
        case 'estrategia':
            return '#FFFACD';
        case 'moba':
            return '#FFDAB9';
        case 'battleroyale':
            return '#BDFCC9';
        default:
            return '#ffffff';
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = gameNameInput.value.trim();
    const genre = gameGenreSelect.value;
    const hours = parseInt(gameHoursInput.value);

    if (!name || !genre || !hours) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    addGameToList(name, genre, hours);
    updateStats(genre, hours);

    form.reset();
});