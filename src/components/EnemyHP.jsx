// rnsc для создания
const EnemyHP = function ({enemyCount, increment, decrement}) {

    return (
        <>
            <h1 className="bg-green-100">{enemyCount}</h1>
            <button onClick={increment}>in+</button>
            <button onClick={decrement}>de-</button>
        </>
    )
}

export default EnemyHP;