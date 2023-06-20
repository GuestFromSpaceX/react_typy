const Round = function ({countRound, ranWord, enemyNumber}) {

    return (
        <>
            <h1 className="">Противник {enemyNumber}</h1>
            <h1 className="">Раунд {countRound}</h1>
            <h2 className="">Для атаки введи "{ranWord}"</h2>
        </>
    )
}

export default Round;