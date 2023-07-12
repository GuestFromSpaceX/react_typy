const Round = function ({elapsedTime, pastElapsedTime, pastRanWord, countRound, ranWord, enemyNumber}) {

    return (
        <>            
            <h1 className=""> - "{ranWord}" Атака</h1>
            <h1 className=""> - "{ranWord}" Лечение</h1>
            <h3 className="">Противник {enemyNumber}</h3>
            <h3 className="">Раунд {countRound}</h3>
            <h3 className="">мультипликатор <br />
            {(elapsedTime / pastRanWord / 1000).toFixed(3)}</h3>
            <h3 className="">timer {elapsedTime}</h3>
        </>
    )
}

export default Round;