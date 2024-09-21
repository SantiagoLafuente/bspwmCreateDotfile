import React, { useState } from 'react';

const SimulationScreen = ({ width, height }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div style={{ width, height, border: '1px solid black', position: isFullScreen ? 'fixed' : 'static', zIndex: isFullScreen ? '9999' : '0', backgroundImage: "url(https://wallpaperaccess.com/full/370260.jpg)"}}>
      {/* Aquí renderiza el contenido de tu simulación */}
      
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
      </button>
    </div>
  );
};

export default SimulationScreen;