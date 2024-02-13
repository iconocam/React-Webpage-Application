import React, { useEffect, useState } from 'react';

const pokemonPeople = () => {
    const [pokemonPeople, setPokemonPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5173/api/pokemonPeople');
                const data = await response.json();
                setPokemonPeople(data);
            } catch (error) {
                console.error('Error fetching PokemonPeople:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>MongoDB Collection: PokemonPeople</h2>
            <ul>
                {pokemonPeople.map((person) => (
                    <li key={person._id}>
                        <strong>Pokemon:</strong> {person.Pokemon}<br />
                        <strong>Species:</strong> {person.Species}<br />
                        <strong>Geo-Location:</strong> {person['Geo-Location']}<br />
                        <strong>Personality:</strong> {person.Personality}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default pokemonPeople;