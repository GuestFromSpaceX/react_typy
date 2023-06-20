import React, {useState} from "react";

export const Round = function () {
    const words = ['apple', 'banana', 'orange', 'grape', 'melon'];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    const [count, setCount] = useState(1)
    const [ranWord, setRanWord] = useState(randomWord)

    return (
        <>
            <h1 className="">Раунд {count}</h1>
            <h2 className="">Для атаки введи {ranWord}</h2>
        </>
    )
}

export const MainInput = function ({ ranWord }) {


    return (
        <>
            <input className='' placeholder={`Введи "${ranWord}"`}></input>
        </>
    )
}