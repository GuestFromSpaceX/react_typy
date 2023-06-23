// rnsc для создания
const EnemyHP = function ({enemyCount, 
    enemyMaxCount, increment, decrement, enemyAttak, enemyNumber}) {

    return (
        <>
            <h1>{enemyNumber}LVL</h1>
            <h1 className="bg-red-500">
                {enemyCount.toFixed(1)}/{enemyMaxCount.toFixed(1)} HP 
            </h1>
            <h1>
                {enemyAttak.toFixed(1)}ATK
            </h1>
            <button onClick={increment}>in+</button>
            <button onClick={decrement}>de-</button>
        </>
    )
}

export default EnemyHP;