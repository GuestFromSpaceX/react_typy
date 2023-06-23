// rnsc для создания
const HeroHP = function ({heroCount, heroMaxCount, incrementHero, decrementHero, heroAttak}) {

    return (
        <>
            <h1>
                heroLVL
            </h1>
            <h1 className="bg-green-500">
                {heroCount.toFixed(1)}/{heroMaxCount.toFixed(1)} HP
            </h1>
            <h1 className="bg-green-500">
                {heroAttak.toFixed(1)} ATK
            </h1>
            <button onClick={incrementHero}>in+</button>
            <button onClick={decrementHero}>de-</button>
        </>
    )
}

export default HeroHP;