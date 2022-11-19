/* ---------------------------------------- */
/*                DEPENDENCIES              */  
/* ---------------------------------------- */
// Packages

// UI Local Components
import { MemoryGameBox } from './components';

// Styles
import './shared/styles/global.css';

/* ---------------------------------------- */
/*                    APP                   */  
/* ---------------------------------------- */
function App() {
  /* ************** RENDERING ************* */
  return (
    <div className="App flex justify-center items-center">
      <MemoryGameBox />
    </div>
  );
}

export default App;
