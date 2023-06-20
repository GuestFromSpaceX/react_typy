// rnsc для создания
const HeroHP = function ({heroCount, incrementHero, decrementHero}) {

    return (
        <>
            <h1 className="bg-green-500">{heroCount}/100 HP</h1>
            <button onClick={incrementHero}>in+</button>
            <button onClick={decrementHero}>de-</button>
        </>
    )
}

export default HeroHP;