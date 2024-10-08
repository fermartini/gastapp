import React, { useState, useEffect } from 'react';

export default function PerfilIcono({ perfil = 'https://fermartini.github.io/imggastapp/perfil/sin-foto.png' }) {
    return (
        <img
            src={perfil} // Ruta a una imagen por defecto si perfil está vacío
            alt="Perfil"
            className="w-8 h-8 rounded-full"
        />
    );
}
