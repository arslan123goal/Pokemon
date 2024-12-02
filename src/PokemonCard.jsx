export const PokemonCard = ({ pokemonData }) => {
    // console.log(pokemonData);
    return (
        <li className="pokemon-card">
            <figure>
                <img
                    className="pokemon-image"
                    src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
            </figure>
            <h1 className="pokemon-name">{pokemonData.name}</h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {
                        pokemonData.types.map((curType) => {
                            return curType.type.name
                        }).join(", ")
                    }
                </p>
            </div>

            <div className="grid-three-cols">
                <div>
                    <p className="pokemon-info">
                        <span>Height: </span> {pokemonData.height}
                    </p>
                </div>
                <div>
                    <p className="pokemon-info">
                        <span>Weight: </span> {pokemonData.weight}
                    </p>
                </div>
                <div>
                    <p className="pokemon-info">
                        <span>Speed: </span> {pokemonData.stats[5].base_stat}
                    </p>
                </div>
            </div>

            <div className="grid-three-cols">
                <div>
                    <p className="pokemon-info">
                        <span>Experience: </span> {pokemonData.base_experience}
                    </p>
                </div>
                <div>
                    <p className="pokemon-info">
                        <span>Attack: </span> {pokemonData.stats[1].base_stat}
                    </p>
                </div>
                <div>
                    <span>Abilities:</span>
                    <p className="pokemon-info">
                        {
                            pokemonData.abilities
                                .map((abilityInfo) => abilityInfo.ability.name)
                                .slice(0, 1)
                                .join(", ")
                        }
                    </p>
                </div>
            </div>
        </li>
    )
}