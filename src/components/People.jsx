import React, { useEffect, useState } from 'react';
import { getPeoplePage, getNextPage, getPreviousPage } from '../utils/api';
import PersonModal from './PersonModal';
import '../styles/People.css';
import ReactLoading from 'react-loading';

const People = () => {

    const [people, setPeople] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleGetPage();
    }, []);

    const handleGetPage = () => {
        setLoading(true);
        getPeoplePage().then((response) => {
            localStorage.setItem('people', JSON.stringify(response.data));
            setLoading(false);
            setPeople(response.data);
        });
    }

    const handleGetNextPage = () => {
        setLoading(true);
        getNextPage().then((response) => {
          localStorage.setItem('people', JSON.stringify(response.data));
          setLoading(false);
          setPeople(response.data);
        });
    }

    const handleGetPreviousPage = () => {
        setLoading(true);
        getPreviousPage().then((response) => {
            localStorage.setItem('people', JSON.stringify(response.data));
            setLoading(false);
            setPeople(response.data);
        });
    }

    const handleSelectPerson = (person) => {
        setSelectedPerson(person);
    };

    const handleCloseModal = () => {
        setSelectedPerson(null);
    };

    return (
        <div className='container'>
            <h1>Star Wars Characters</h1>
            
            {selectedPerson ? (
            <PersonModal person={selectedPerson} handleClose={handleCloseModal} />
            ) : <ul>
                {people.results ? people.results.map((person, index) => (
                <li key={index} onClick={() => handleSelectPerson(person)}>{person.name}</li>
                )) : null}
            </ul>}

            { loading ? <ReactLoading className='loading' type={'spinningBubbles'} color={'white'} height={'10%'} width={'10%'} /> : null }

            <div className='btn-container'>
                <button className='btn btn-refresh' onClick={() => handleGetPage()}>Refresh</button>
                <button className='btn btn-next' onClick={() => handleGetNextPage()} disabled={people.next == null}>Next</button>
                <button className='btn btn-prev' onClick={() => handleGetPreviousPage()} disabled={people.previous == null}>Previous</button>
            </div>   
        </div>
    );
}

export default People;
