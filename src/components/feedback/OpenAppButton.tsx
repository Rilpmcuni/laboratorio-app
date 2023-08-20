import React from 'react';

function OpenAppButton() {
  const abrirPWA = () => {
    window.open(window.location.origin);
  };

  if ('standalone' in window.navigator) {
    return (
      <button onClick={abrirPWA}>
        Abrir la aplicación
      </button>
    );
  } else {
    return (
      <p>
        Por favor, instala la aplicación para acceder.
      </p>
    );
  }
}

export default OpenAppButton;
