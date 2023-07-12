function RoomButton({handleEndGame, handleMap, handleStartPage}) {

  return (
    <div>
      <button  
        onClick={
         () => {handleEndGame(false); handleMap(false); handleStartPage(false);}}>
        ROOM
      </button>
    </div>
  );
}

export default RoomButton;