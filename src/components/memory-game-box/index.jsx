/* ----------------------------------- */
/*              DEPENDENCIES           */
/* ----------------------------------- */
// Packages

// Fake APIs
import { POKEMON_API } from '../../shared/utils/APIs/pokemon';

// Styles
import './index.css';

/* ----------------------------------- */
/*             MemoryGameBox           */
/* ----------------------------------- */
function MemoryGameBox() {
    /* ********* RENDERING *********** */
    return (
        <div className="memory-game-box">
            {POKEMON_API.map((pokemon) => (
                <div className="pokemon-box">
                    <div className="pokemon pokemon-box_front" />
                    <div className="pokemon pokemon-box_back">
                        <img src={pokemon.image} alt='pokemon_img' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MemoryGameBox;