import React, { useState, useEffect } from 'react';
import './styles/App.css';

import logo from './media/logo.svg';
import hero from './media/skeleton-hero.png';
import enemy from './media/skeleton.png';

import EnemyHP from './components/EnemyHP';
import HeroHP from './components/HeroHP';
import MainInput from './components/MainInput';
import Round from './components/Round';
import Stopwatch from './components/Stopwatch';

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
  const [ranWord, setRanWord] = useState(words[Math.floor(Math.random() * words.length)])

  //удар героя
  //событие, когда я ввел нужно слово и Enter
  const inputEnterPress = (event) => {
    if (enemyCount <= 0) {
      //меняется номер противника
      setEnemyNumber(enemyNumber + 1)
      //меняется имя противника
      //сбрасывается таймер
      setSeconds(seconds => 0)
      //смена бекграунда противника
      //смена изображения противника
      setRandomColor(getRandomColor())
      //смена хп противника
      setEnemyCount(enemyCount + 10);
    }
    
    if ((event.key === 'Enter') && (inputValue == ranWord)) {
        setEnemyCount(enemyCount - 1);
        setCountRound(countRound + 1);
        setInputValue('');
        setRanWord(words[Math.floor(Math.random() * words.length)])
    } 
  }

  //секунды
  const [seconds, setSeconds] = useState(0);

  //секундомер с какой-то частью размонтироватия
  useEffect(() => {
    let currentSeconds = 0; // Промежуточная переменная для хранения текущего значения seconds

    // Интервал для увеличения счетчика каждую секунду
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        currentSeconds = prevSeconds + 1; // Обновление значения currentSeconds
        return currentSeconds;
      });
  
      // Каждые 10 секунд наносится удар по Герою
      if (currentSeconds % 10 === 0) {
        setHeroCount((prevHeroCount) => prevHeroCount - 3);
      }

    }, 1000);

    // Очистка интервала при размонтировании компонента
    //return () => clearInterval(interval);
  }, []);




  //HP противника (должно быть противника)
  const [enemyCount, setEnemyCount] = useState(10)
  function increment() {
      setEnemyCount(enemyCount + 1)
  }
  function decrement() {
      setEnemyCount(enemyCount - 1)
  }

  //номер противника
  const [enemyNumber, setEnemyNumber] = useState(1)

  //HP героя
  const [heroCount, setHeroCount] = useState(100)
  function incrementHero() {
      setHeroCount(heroCount + 1)
  }
  function decrementHero() {
      setHeroCount(heroCount - 1)
  }

  function getRandomColor() {
      // Генерация случайного значения от 0 до 255 для каждой компоненты RGB
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
    
      // Форматирование значения цвета в формате "#rrggbb"
      const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
      return color;
    }

     // В компоненте
  const [randomColor, setRandomColor] = useState(getRandomColor());
  
  // Вывод значений в консоль разработчика
  //console.log("Value of ranWord:", ranWord);
  //console.log("Value of enemyCount:", enemyCount);
  //console.log("Value of inputValue:", inputValue);
  console.log("Seconds:", seconds);
  console.log("HeroHP:", heroCount);
  console.log("EnemyColor:", randomColor);

  
  
 

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
              <HeroHP
                heroCount={heroCount}
                incrementHero={incrementHero}
                decrementHero={decrementHero}
                inputEnterPress={inputEnterPress}
              />
            </div>
          </div> 
          <div name='log' className="bg-yellow-300">
            <Round 
              countRound={countRound} 
              ranWord={ranWord} 
              inputEnterPress={inputEnterPress}
              enemyNumber={enemyNumber}
            />
            <Stopwatch 
              seconds={seconds}
              setSeconds={setSeconds}  
            />
          </div> 
          <div name='enemy' className="bg-[#ff7fff]/50 flex flex-col items-center">
            <div name='enemy-pic' className={`bg-[`+randomColor+`]`}>
              <img src={enemy} alt='Изображение противника'/>
            </div>
            <div name='enemy-stats' className="bg-red-400">
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
