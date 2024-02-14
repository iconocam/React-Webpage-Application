import React, { useEffect, useState } from 'react';
import './About.css'

const About = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [generationInfo, setGenerationInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Get a pokemon by ID from the Poke Api
    const fetchRandomPokemon = async () => {
        try {
            setIsLoading(true);
            // Generate a random Pokemon ID
            const randomPokemonId = Math.floor(Math.random() * 225) + 1;
    
            // Fetch Pokemon data
            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
            const pokemonData = await pokemonResponse.json();
    
            // Fetch Pokemon species data (contains evolution chain URL)
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId}`);
            const speciesData = await speciesResponse.json();
    
            // Fetch evolution chain data
            const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
            const evolutionChainData = await evolutionChainResponse.json();

             // Fetch generation data
            const generationResponse = await fetch('https://pokeapi.co/api/v2/generation/generation-i/');
            const generationData = await generationResponse.json();

            setPokemonData({
                ...pokemonData,
                evolutionChain: evolutionChainData
            });
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
        <div className="pokebox">
            <h1>Welcome to our Pokemon Center! Please feel free to lounge around and explore our haven of angels</h1>
            <button className="pokeButton" onClick={fetchRandomPokemon} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Who is Your Pokemon?!'}
            </button>
            {pokemonData && (
                <div>
                    <h2>Pokemon Information</h2>
                    <p>Name: {pokemonData.name}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    {pokemonData.evolutionChain && (
                        <div>
                            <h3>Evolution Information</h3>
                            {/* Display evolution information here */}
                            <div className="evolution-info">
                            {pokemonData.evolutionChain.chain.species.name.toUpperCase()}
                            {pokemonData.evolutionChain.chain.evolves_to.length > 0 && (
                <div>
                <h4>Evolves To:</h4>

                {pokemonData.evolutionChain.chain.evolves_to.map((evolution, index) => (
                    <div key={index}>
                        <p>Name: {evolution.species.name}</p>
                        {/* Display other evolution details here */}
                    </div>
                ))}
            </div>
        )}

        {pokemonData.evolutionChain.needs_overworld_rain !== undefined && (
            <p>Needs Overworld Rain: {pokemonData.evolutionChain.needs_overworld_rain ? 'Yes' : 'No'}</p>
        )}

        {pokemonData.evolutionChain.trigger && (
            <p>Trigger: {pokemonData.evolutionChain.trigger.name}</p>
        )}

        {pokemonData.evolutionChain.gender && (
            <p>Gender: {pokemonData.evolutionChain.gender}</p>
        )}

        {pokemonData.evolutionChain.item && (
            <p>Item: {pokemonData.evolutionChain.item.name}</p>
        )}
        {generationInfo && (
        <div>
        <h2>Generation Information</h2>
        <p>Generation Name: {generationInfo.name}</p>
          {/* Add more generation details as needed */}
        </div>
    )}
                            </div>
                            
                        </div>
                    )}
                </div>
            )}





            
        </div>
    );
                    }
export default About;