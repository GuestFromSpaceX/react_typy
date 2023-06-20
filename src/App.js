import React, { useState } from 'react';
import './styles/App.css';
import logo from './media/logo.svg';
import hero from './media/skeleton-hero.png';
import enemy from './media/skeleton.png';
import HP from './components/HP';
import { MainInput, Round } from './components/MainInput';

function App() {

  return (
    <div className="App">

      <header class="bg-[#998414] flex flex-row flex-wrap justify-around items-center">
        <div name='logo' class="">
            <img src={logo} alt='Логотип'/>
        </div>
        <div name='play-menu-button' class="bg-[#ff6fff]/50">
            <button class="">Play</button>
        </div>
        <div name='stats-menu-button' class="bg-[#ff5fff]/50">
            <button class="">Player Stats</button>
        </div>
        <div name='log-in-button' class="bg-[#ff3fff]/50">
            <button class="">Log in</button>
        </div>       
      </header>

      <main class="bg-[#ff1fff]/50 flex flex-col items-center">
        <div name='top-main' class="bg-[#ff2fff]/50 flex flex-row justify-center">
          <div name='player' class="bg-[#ff3fff]/50 flex flex-col items-center">
            <div name='player-pic' class="bg-red-100">
              <img src={hero} alt='Изображение игрока'/>
            </div>
            <div name='player-stats' class="bg-red-200">
              <HP/>
            </div>
          </div> 
          <div name='log' class="bg-yellow-300">
            <Round/>
          </div> 
          <div name='enemy' class="bg-[#ff7fff]/50 flex flex-col items-center">
            <div name='enemy-pic' class="bg-blue-100">
              <img src={enemy} alt='Изображение противника'/>
            </div>
            <div name='enemy-stats' class="bg-blue-300">
              <HP/>
            </div>
          </div>     
        </div>
        <div name='main-input-block' class="bg-green-100">
          <MainInput/>
        </div>
        <div name='main-keyboard' class="bg-green-200">
          КЛАВИАТУРА
        </div>    
      </main>

      <footer class="bg-blue-200">
        Footer
      </footer>
    </div>
  );
}

export default App;
