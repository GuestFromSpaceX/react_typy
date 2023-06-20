// rnsc для создания
const EnemyHP = function ({enemyCount, increment, decrement}) {

    return (
        <>
            <h1 className="bg-red-500">{enemyCount}/10 HP</h1>
            <button onClick={increment}>in+</button>
            <button onClick={decrement}>de-</button>
        </>
    )
}

export default EnemyHP;