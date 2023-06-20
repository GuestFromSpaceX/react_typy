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
                onKeyPress={inputEnterPress}
                value={inputValue}
                onChange={handleInputChange} 
            />
        </>
    )
}

export default MainInput;