const MainInput = function ({
                                ranWord, 
                                inputEnterPress,
                                inputValue,
                                handleInputChange}) {

    return (
        <>
            <input 
                className='' 
                placeholder={`Введи "`+ranWord+`"`} 
                value={inputValue}
                onChange={handleInputChange} 
                onKeyUp={inputEnterPress}
            />
        </>
    )
}

export default MainInput;