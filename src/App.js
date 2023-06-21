import React, { useState, useEffect } from 'react';
import './styles/App.css';

import logo from './media/logo.svg';
import hero from './media/skeleton-hero.png';
import enemy from './media/skeleton.png';
import stone from './media/stones.jpg';

import EnemyHP from './components/EnemyHP';
import HeroHP from './components/HeroHP';
import MainInput from './components/MainInput';
import Round from './components/Round';
import Stopwatch from './components/Stopwatch';
import PlayButton from './components/PlayButton';
import StatsButton from './components/StatsButton';
import LogInButton from './components/LogInButton';
import KeyboardOption from './components/KeyboardMenu';

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
    //КАК СДЕЛАТЬ ТАК ЧТОБЫ ЭТО ПРОИСХОДИЛО СВОЕВРЕМЕННО
    if (enemyCount <= 0) {
      //меняется номер противника
      setEnemyNumber(enemyNumber + 1)
      //увеличивается урон противника
      setEnemyAttak(enemyAttak + enemyNumber*0.3)
      //меняется имя противника
      //сбрасывается таймер
      setSeconds(seconds => 0)
      //смена бекграунда противника
      //смена изображения противника
      setRandomColor(getRandomColor())
      //смена хп противника
      setEnemyMaxCount(enemyMaxCount + (enemyNumber*0.3))
      setEnemyCount(enemyMaxCount);
    }
    
    if ((event.key === 'Enter') && (inputValue == ranWord)) {
        setEnemyCount(enemyCount - 1);
        setCountRound(countRound + 1);
        setInputValue('');
        setRanWord(words[Math.floor(Math.random() * words.length)])
    } 
  }

//секунды
  const [seconds, setSeconds] = useState(-3);

//секундомер с какой-то частью размонтироватия
//НЕ ЗАКИДЫВАЕТ В СЕБЯ enemyAttak ПОСЛЕ ОБНОВЛЕНИЯ ЗНАЧЕНИЯ
  useEffect(() => {
    let currentSeconds = 0; // Промежуточная переменная для хранения текущего значения seconds

    // Интервал для увеличения счетчика каждую секунду
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        currentSeconds = prevSeconds + 1; // Обновление значения currentSeconds
        return currentSeconds;
      });
  
      // Каждые 10 секунд наносится удар по Герою
      if (currentSeconds % 10 === 0 && currentSeconds !== 0) {
        setHeroCount((prevHeroCount) => prevHeroCount - enemyAttak);
      }

    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);




//HP противника (должно быть противника)
  const [enemyCount, setEnemyCount] = useState(1)
  const [enemyMaxCount, setEnemyMaxCount] = useState(1)
  function increment() {
      setEnemyCount(enemyCount + 1)
  }
  function decrement() {
      setEnemyCount(enemyCount - 1)
  }

  
//номер противника и его же уровень
  const [enemyNumber, setEnemyNumber] = useState(1)

//аттака противника
  const [enemyAttak, setEnemyAttak] = useState(enemyNumber*0.3)

//HP героя
  const [heroMaxCount, setHeroMaxCount] = useState(10)
  const [heroCount, setHeroCount] = useState(heroMaxCount)
  function incrementHero() {
      setHeroCount(heroCount + 1)
  }
  function decrementHero() {
      setHeroCount(heroCount - 1)
  }

//Генератор цвета противника
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

  
  
  //<header className="bg-[#998414]

  return (
    <div className="bg-black">

      <header className="m-5 bg-stone-bg flex flex-row justify-around items-center">
        <div name='logo' className="w-1/3">
            <img src={logo} alt='Логотип'/>
        </div>
        <div name='play-menu-button' className="w-1/5">
            <PlayButton

            />
        </div>
        <div name='stats-menu-button' className="w-1/5">
              <StatsButton

              />
        </div>
        <div name='log-in-button' className="w-1/10">
          <LogInButton

          />
        </div>       
      </header>

      <main className="p-3 m-5 bg-metal-stone flex flex-col items-center">
        <div name='top-main' className="bg-[#ff2fff]/50 flex flex-row justify-center">
          <div name='player' className="bg-[#ff3fff]/50 flex flex-col items-center">
            <div name='player-pic' className="bg-red-100">
              <img src={hero} alt='Изображение игрока'/>
            </div>
            <div name='player-stats' className="bg-red-200">
              <HeroHP
                heroCount={heroCount}
                heroMaxCount={heroMaxCount}
                incrementHero={incrementHero}
                decrementHero={decrementHero}
                inputEnterPress={inputEnterPress}
              />
            </div>
          </div> 
          <div name='log' className="bg-fight text-white flex flex-col justify-end items-center">
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
            <div name='enemy-pic' className={`bg-[${randomColor}]`}>
              <img src={enemy} alt='Изображение противника'/>
            </div>
            <div name='enemy-stats' className="bg-red-400">
              <EnemyHP 
                enemyCount={enemyCount}
                enemyMaxCount={enemyMaxCount}  
                increment={increment} 
                decrement={decrement} 
                inputEnterPress={inputEnterPress}
                enemyNumber={enemyNumber}
                enemyAttak={enemyAttak}
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
        <div name='main-keyboard' className="bg-black text-white">
          <KeyboardOption
          
          />
        </div>    
      </main>

      <footer className="m-5 bg-blue-200">
        Footer
      </footer>
    </div>
  );
}

export default App;
