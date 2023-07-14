import RoomButton from "./RoomButton";

function MapRoomBlock({handleEndGame, handleMap, handleStartPage}) {

  return (
    <div>
          <div name='map-lvls' className='flex flex-row justify-center items-center'>
            <div>
              <button className='bg-red-100'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
            <div className='flex flex-col'>
              <button className='bg-red-200'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
              <button className='bg-red-300'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
              <button className='bg-red-400'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
            <div>
              <button className='bg-red-500'>
                <RoomButton
                  handleEndGame={handleEndGame}
                  handleMap={handleMap}
                  handleStartPage={handleStartPage} 
                />
              </button>
            </div>
          </div>
    </div>
  );
}

export default MapRoomBlock;