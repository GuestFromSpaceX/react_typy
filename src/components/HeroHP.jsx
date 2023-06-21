// rnsc для создания
const HeroHP = function ({heroCount, heroMaxCount, incrementHero, decrementHero}) {

    return (
        <>
            <h1 className="bg-green-500">{heroCount.toFixed(1)}/{heroMaxCount.toFixed(1)} HP</h1>
            <button onClick={incrementHero}>in+</button>
            <button onClick={decrementHero}>de-</button>
        </>
    )
}

export default HeroHP;