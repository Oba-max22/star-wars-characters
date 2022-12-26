import React from 'react';
import '../styles/PersonModal.css';

const PersonModal = ({ person, handleClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
        <h2>{person.name}</h2>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
        <p>Hair color: {person.hair_color}</p>
        <p>Skin color: {person.skin_color}</p>
        <p>Eye color: {person.eye_color}</p>
        <p>Birth year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
      </div>
    </div>
  );
};

export default PersonModal;
