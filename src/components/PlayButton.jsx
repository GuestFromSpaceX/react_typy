import React, { useState } from "react";
import butrpgplay from '../media/button-rpg-play.png';
import butrpgfocusplay from '../media/button-rpg-focus-play.png';
import butrpgpushplay from '../media/button-rpg-push-play.png';

//<img className="hidden" src={butrpgfocusplay} alt='Кнопка плей при наведении' />
//<img className="hidden" src={butrpgpushplay} alt='Кнопка плей при нажатии' />

function PlayButton({handleEndGame, handleEndGameOn, handleEffectRunningOn}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="flex justify-center" onClick={toggleMenu}>
        <img className="" src={butrpgplay} alt='Кнопка плей'/>
         
      </button>
      {isMenuOpen && (
        <div className="text-white flex flex-col justify-start items-start">
          <button className="text-white bg-green-300">- Новичек</button>
          <button name='newSandBoxGame' className="bg-green-400" onClick={ () => {handleEndGameOn(); handleEffectRunningOn(); }}>- Опытный (new sand box game)</button>
          <button name='end' className="bg-green-400" onClick={ () => {handleEndGame(); handleEffectRunningOn(); }}>- Конец игры</button>
        </div>
      )}
    </div>
  );
  
}

export default PlayButton;