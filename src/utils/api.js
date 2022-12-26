import axios from 'axios';

const URL = 'https://swapi.dev/api/people';

export const getPeoplePage = async () => {
  return await axios.get(URL);
}

export const getPeopleFromStore = () => {
    return JSON.parse(localStorage.getItem('people'));
}

export const getNextPage = async () => {
    const people = getPeopleFromStore();
    if (people.next) {
        return await axios.get(people.next);
    }
}

export const getPreviousPage = async () => {
    const people = getPeopleFromStore();
    if (people.previous) {
        return await axios.get(people.previous);
    }
}