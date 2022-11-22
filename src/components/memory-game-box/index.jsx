/* ----------------------------------- */
/*              DEPENDENCIES           */
/* ----------------------------------- */
// Packages
import { useState } from 'react';

// Fake APIs
import { POKEMON_API } from '../../shared/utils/APIs/pokemon';

// Styles
import './index.css';

/* ----------------------------------- */
/*             MemoryGameBox           */
/* ----------------------------------- */
function MemoryGameBox() {
    // STATES
    const SHUFFLED_POKEMON_API = [...POKEMON_API].sort(() => Math.random() - 0.5);
    const [items, setItems] = useState(SHUFFLED_POKEMON_API);
    const [previous, setPrevious] = useState(-1);

    // STATUS OF THE CARDS
    const IsDuplicate  = (currentId) => {
        if (items[currentId].image === items[previous].image) {
            items[currentId].status = 'clicked-pokemon';
            items[previous].status = 'clicked-pokemon';
            setItems([...items]);
            setPrevious(-1);
        } else {
            items[currentId].status = 'clicked-pokemon';
            items[previous].status = 'clicked-pokemon';
            setItems([...items])
            setTimeout(() => {
                items[currentId].status = '';
                items[previous].status = '';
                setItems([...items]);
                setPrevious(-1);
            }, 1000)
        }
    }

    // HANDLE CLICK
    const HandleClick = (id) => {
        if (previous === -1) {
            items[id].status = "active"
            setItems([...items])
            setPrevious(id)
        } else {
            IsDuplicate(id)
        }
    }

    // RESTART GAME
    const ReStartGame = items.every((item) => item.status)

    /* ********* RENDERING *********** */
    return (
        <>
            <div className="memory-game-box">
                {items.map((pokemon) => {
                    const { status, id, image } = pokemon
                    return (
                        <div id="pokemon-box" 
                            className={`pokemon-box ${status ? 'clicked-pokemon' : ''}`}
                            key={id}
                            onClick={() => HandleClick(items.findIndex((object) => object.id === id))}
                        >
                            <div className="pokemon pokemon-box_front" />
                            <div className='pokemon pokemon-box_back'>
                                <img src={image} alt='pokemon_img' />
                            </div>
                        </div>
                    )
                })}
            </div>
            {ReStartGame && <div className="restart-game text-center" onClick={() => window.location.reload()}> Restart Game</div>}
        </>
    )
}

export default MemoryGameBox;