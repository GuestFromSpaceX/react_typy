import React, { useState } from "react";

function PlayButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="bg-[#ff6fff]/50" onClick={toggleMenu}>Play</button>
      {isMenuOpen && (
        <div className="text-white flex flex-col">
          <button className="text-white bg-[#555555]/50">- Новичек</button>
          <button className="bg-green-600">- Опытный</button>
        </div>
      )}
    </div>
  );
  
}

export default PlayButton;