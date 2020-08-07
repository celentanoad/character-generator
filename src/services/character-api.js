const BASE_URL = '/api/characters';

export function getAll() {
    const options = {
        method: 'GET'
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export function create(character) {
    const options = {
        method: 'POST',
        body: JSON.stringify(character)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}