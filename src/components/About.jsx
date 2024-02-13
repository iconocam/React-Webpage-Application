import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Get a pokemon by ID from the Poke Api
    const fetchRandomPokemon = async () => {
        try {
            setIsLoading(true);
            // Generate a random Pokemon ID
            const randomPokemonId = Math.floor(Math.random() * 225) + 1; //  about 248 pokemon indexed

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error("Error fetching random Pokemon:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []); 

    // Uncaught TypeError: destroy is not a function
    // Uncaught ReferenceError: fetchRandomPokemon is not defined
    // Consider adding an error boundary to your tree to customize error handling behavior.
    // useEffect was returning an object apparently and it was breaking , destroy /deconstructor???
    return (
        <div className = "pokebox">
            <h1>Welcome to our Pokemon Center! Please feel free to lounge around and explore our haven of angels</h1>
            <button className= "pokeButton" onClick={fetchRandomPokemon} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Who is Your Pokemon?!'}
            </button>
            {pokemonData && (
                <div>
                    <h2>Pokemon Information</h2>
                    <p>Name: {pokemonData.name}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                </div>
            )}
        </div>
    );
};

export default About;