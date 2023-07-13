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
import PlayButton from './components/PlayButton';
import StatsButton from './components/StatsButton';
import LogInButton from './components/LogInButton';
import KeyboardOption from './components/KeyboardMenu';
import RoomButton from './components/RoomButton';
import Timer from './components/Timer';

import words from './words/words'

function App() {
  
  
  //Запись рекорда в локал сторедж
  let localValue = localStorage.getItem('record');
  //
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pastElapsedTime, setPastElapsedTime] = useState(elapsedTime);
  //номер раунда
  const [countRound, setCountRound] = useState(1)
  //слово, которое нужно ввести
  const [ranWord, setRanWord] = useState(words[Math.floor(Math.random() * words.length)])
  //длина прошлого слово, которое нужно было ввести
  const [pastRanWord, setPastRanWord] = useState(ranWord.length)
  //номер противника и его же уровень
  const [enemyNumber, setEnemyNumber] = useState(1)
  //аттака противника
  const [enemyAttak, setEnemyAttak] = useState(enemyNumber*0.3);
  //переключатель главной страницы
  const [showStartPage, setShowStartPage] = useState(true);
  const handleStartPage = (value) => {
    value ? setShowStartPage(true) : setShowStartPage(false);
  };
  //переключатель карты
  const [showMap, setShowMap] = useState(false);
  const handleMap = (value) => {
    value ? setShowMap(true) : setShowMap(false);
  }
  //конец игры переключатель
  const [showEndGame, setShowEndGame] = useState(false);
  const handleEndGame = (value) => {
    value ? (setShowEndGame(true) && handleHeroIsDead()) : (setShowEndGame(false));
  };
  // В компоненте
  const [randomColor, setRandomColor] = useState(getRandomColor());
  //HP противника (должно быть противника)
  const [enemyCount, setEnemyCount] = useState(1)
  const [enemyMaxCount, setEnemyMaxCount] = useState(1)
  function increment() {
    setEnemyCount(enemyCount + 1)
  }
  function decrement() {
    setEnemyCount(enemyCount - 1)
  }

  //const [en, seten] = useState({sem: 1, sam: 2})
  //en.sem бу равно 1

  //удар героя
  const [heroAttak, setHeroAttak] = useState(1)
  
  //HP героя
  const [heroMaxCount, setHeroMaxCount] = useState(50)
  const [heroCount, setHeroCount] = useState(heroMaxCount)
  function incrementHero() {
    setHeroCount(heroCount + 1)
  }
  function decrementHero() {
    setHeroCount(heroCount - 1)
  }

  //Рекорд героя
  const [heroNewRecord, setHeroNewRecord] = useState(0)
  //значение инпута
  const [inputValue, setInputValue] = useState('')
  //передача набранного текста в значение инпута
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  //событие, когда я ввел нужно слово
  const inputEnterPress = (event) => {
    
    if ((inputValue === ranWord)) {
      setPastRanWord(ranWord.length);
      setPastElapsedTime(elapsedTime);
      console.log('elapsedTime:', elapsedTime);
      setEnemyCount(prevEnemyCount => prevEnemyCount - (heroAttak - (elapsedTime/pastRanWord/1000)));
      setCountRound(prevCountRound => prevCountRound + 1);
      setInputValue('');
      setRanWord(words[Math.floor(Math.random() * words.length)]);
      //если герой убивает противника за один удар
      if ((enemyCount - (heroAttak - (elapsedTime/pastRanWord/1000))) <= 0) {
        //очко в зачет героя
        setHeroNewRecord(heroNewRecord + enemyNumber);
        //меняется номер противника
        setEnemyNumber(enemyNumber + 1);
        //увеличивается урон противника
        setEnemyAttak(prevEnemyAttak => prevEnemyAttak + enemyNumber*0.3);
        //меняется имя противника
        //смена бекграунда противника
        setRandomColor(getRandomColor());
        //смена изображения противника
        //смена хп противника
        setEnemyMaxCount(enemyMaxCount + (enemyNumber*0.3));
        setEnemyCount(enemyMaxCount + (enemyNumber*0.3));
        handleMap(true);
      };
      //если противник убивает героя за один удар
      if (heroCount - (enemyAttak + (elapsedTime/pastRanWord/1000)) <= 0) {
        handleEndGame(true);
        handleMap(false);
      } else {
        setHeroCount((prevHeroCount) => prevHeroCount - (enemyAttak + (elapsedTime/pastRanWord/1000)));
      };
    }
    console.log('_____________________________');
    console.log("EnemyHP:", enemyCount);
    console.log("EnemyHP - heroATK:",enemyCount - (heroAttak - (elapsedTime/pastRanWord/1000)));
    console.log('hero ATK:', heroAttak - (elapsedTime/pastRanWord/1000));
    console.log('elapsedTime/pastRanWord/1000:', elapsedTime/pastRanWord/1000);
    console.log('elapsedTime:', elapsedTime);
    console.log('pastRanWord:', pastRanWord); 
  }
  
  //обновление значений героя при конце игры
  const handleHeroIsDead = () => {
    if (localStorage.getItem('record') === null) {
      localStorage.setItem('record', heroNewRecord)
    } else if (localStorage.getItem('record') < heroNewRecord) {
      localStorage.setItem('record', heroNewRecord)
    }
    setHeroCount(heroMaxCount);
    setEnemyNumber(1);
    setEnemyAttak(enemyNumber*0.3);
    setEnemyMaxCount(1);
    setEnemyCount(enemyMaxCount);
    setCountRound(1);
    setHeroNewRecord(0);
  };
  
  
  
  
  //Генератор цвета противника
  function getRandomColor() {
    // Генерация случайного значения от 0 до 255 для каждой компоненты RGB
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    // Форматирование значения цвета в формате "#rrggbb"
    let color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    
    if (color.length !== 7) {
      color = color + "f";
    }
    
    return color;
  }
  
  //Timer
  useEffect(() => {  
    if (!!inputValue) {
      const intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1);
      
      return () => clearInterval(intervalId);
    } else {

    setElapsedTime(0);
    }
  }, [inputValue]);
  
  // Вывод значений в консоль разработчика
  // console.log("______________________________");
  //console.log("Value of ranWord:", ranWord);
  // console.log("localValue:", localValue);
  // console.log("EnemyHP:", enemyCount);
  // console.log("EnemyHP - heroATK:",enemyCount - (heroAttak - (pastElapsedTime/pastRanWord/1000)));
  // console.log("Enemy Max HP:", enemyMaxCount);
  // console.log("Enemy ATK:", enemyAttak);
  // console.log("End Game:", showEndGame);
  // console.log("Value of inputValue:", inputValue);
  // console.log("Value of inputValue:", typeof(inputValue));
  // console.log("Value of inputValue:", !!inputValue);
  // console.log("HeroHP:", heroCount);
  // //console.log("EnemyColor:", randomColor, typeof randomColor);
  // console.log('hero ATK:', heroAttak - (pastElapsedTime/pastRanWord/1000));
  // console.log('pastElapsedTime/pastRanWord/1000:', pastElapsedTime/pastRanWord/1000);
  // console.log('pastElapsedTime:', pastElapsedTime);
  // console.log('pastRanWord:', pastRanWord);
  
  
  //<header className="bg-[#998414]
  
  return (
    <div className="bg-black">

      <header className="m-5 bg-stone-bg flex flex-row justify-around items-center">
        <div name='logo' className="w-1/3">
            <img 
              src={logo} 
              onClick={ 
                () => {handleMap(false); handleEndGame(false); handleStartPage(true);}
              } 
              alt='Логотип'
            />
        </div>
        <div name='play-menu-button' className="w-1/5">
          <PlayButton
            handleEndGame={handleEndGame}
            handleMap={handleMap}
            handleStartPage={handleStartPage}
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
        {showStartPage ? (
        <>
        Это стартовая страница
        </>
        ) : (showMap ? (
        <>
          <p>Это экран карты, где ты выбираешь, куда тебе идти</p>
          <div name='input'>

          </div>
          <div name='map-lvls' className='flex flex-row justify-center items-center'>
            <div>
              <button className='bg-red-100'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
            <div className='flex flex-col'>
              <button className='bg-red-200'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
              <button className='bg-red-300'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
              <button className='bg-red-400'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
            <div>
              <button className='bg-red-500'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
          </div>
        </>
        ) : (showEndGame ? (
        <>
          <p>End of the Game</p>
          <p>Ваш лучший результат:</p>
          <p>{localStorage.getItem('record')}</p>
          <button 
            onClick={
              () => {handleEndGame(true); handleMap(false); handleStartPage(true)}}>
            Нажми на меня для возвращения на стартовую страницу 
          </button>
        </>
        ) : (
        <>
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
                  heroAttak={heroAttak}
                />
              </div>
            </div> 
            <div name='log' className="bg-fight text-white flex flex-col justify-start items-center">
              <div name='main-input-block' className="bg-green-100 text-black">
                <MainInput 
                  ranWord={ranWord} 
                  inputEnterPress={inputEnterPress}
                  inputValue={inputValue}
                  handleInputChange={handleInputChange}
                />
              </div>

              <Round 
                elapsedTime={elapsedTime}
                pastElapsedTime={pastElapsedTime}
                pastRanWord={pastRanWord}
                countRound={countRound} 
                ranWord={ranWord} 
                inputEnterPress={inputEnterPress}
                enemyNumber={enemyNumber}
              />
              
            </div> 
            <div name='enemy' className="bg-[#ff7fff]/50 flex flex-col items-center">
              <div 
                name='enemy-pic' 
                className='' 
                style={{backgroundColor:randomColor}}>
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

          <div name='main-keyboard' className="bg-black text-white">
            <KeyboardOption
            
            />
          </div>
        </>)))} 
      </main>

      <footer className="m-5 bg-blue-200">
        Footer
      </footer>
    </div>
  );
}

export default App;
