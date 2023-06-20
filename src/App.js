import React, { useState } from 'react';
import './styles/App.css';
import logo from './media/logo.svg';
import hero from './media/skeleton-hero.png';
import enemy from './media/skeleton.png';
import EnemyHP from './components/EnemyHP';
import MainInput from './components/MainInput';
import Round from './components/Round';
import words from './words/words'

function App() {

  //значение инпута
  const [inputValue, setInputValue] = useState()
  //передача набранного текста в значение инпута
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  //номер раунда
  const [countRound, setCountRound] = useState(1)

  //слово, которое нужно ввести
  const [ranWord, setRanWord] = useState('NIKITA')

  //событие, когда я введ нужно слово и Enter
  const inputEnterPress = (event) => {
    if ((event.key === 'Enter') && (inputValue == ranWord)) {
        setCount(enemyCount - 1);
        setCountRound(countRound + 1);
        setInputValue('');
        setRanWord(words[Math.floor(Math.random() * words.length)])
    }
  }

  //HP противника (должно быть противника)
  const [enemyCount, setCount] = useState(100)
  function increment() {
      setCount(enemyCount + 1)
  }
  function decrement() {
      setCount(enemyCount - 1)
  }

  // Вывод значений в консоль разработчика
  console.log("Value of ranWord:", ranWord);
  console.log("Value of count:", enemyCount);
  console.log("Value of inputValue:", inputValue);

  return (
    <div className="App">

      <header className="bg-[#998414] flex flex-row flex-wrap justify-around items-center">
        <div name='logo' className="">
            <img src={logo} alt='Логотип'/>
        </div>
        <div name='play-menu-button' className="bg-[#ff6fff]/50">
            <button className="">Play</button>
        </div>
        <div name='stats-menu-button' className="bg-[#ff5fff]/50">
            <button className="">Player Stats</button>
        </div>
        <div name='log-in-button' className="bg-[#ff3fff]/50">
            <button className="">Log in</button>
        </div>       
      </header>

      <main className="bg-[#ff1fff]/50 flex flex-col items-center">
        <div name='top-main' className="bg-[#ff2fff]/50 flex flex-row justify-center">
          <div name='player' className="bg-[#ff3fff]/50 flex flex-col items-center">
            <div name='player-pic' className="bg-red-100">
              <img src={hero} alt='Изображение игрока'/>
            </div>
            <div name='player-stats' className="bg-red-200">
              
            </div>
          </div> 
          <div name='log' className="bg-yellow-300">
            <Round 
              countRound={countRound} 
              ranWord={ranWord} 
              inputEnterPress={inputEnterPress}
            />
          </div> 
          <div name='enemy' className="bg-[#ff7fff]/50 flex flex-col items-center">
            <div name='enemy-pic' className="bg-blue-100">
              <img src={enemy} alt='Изображение противника'/>
            </div>
            <div name='enemy-stats' className="bg-blue-300">
              <EnemyHP 
                enemyCount={enemyCount}  
                increment={increment} 
                decrement={decrement} 
                inputEnterPress={inputEnterPress}
              />
            </div>
          </div>     
        </div>
        <div name='main-input-block' className="bg-green-100">
          <MainInput 
            ranWord={ranWord} 
            inputEnterPress={inputEnterPress}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        </div>
        <div name='main-keyboard' className="bg-green-200">
          КЛАВИАТУРА
        </div>    
      </main>

      <footer className="bg-blue-200">
        Footer
      </footer>
    </div>
  );
}

export default App;
