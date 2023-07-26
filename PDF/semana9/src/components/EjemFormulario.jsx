import React, { useState } from 'react';

const EjemFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [modelo, setModelo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenURL, setImagenURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales con los datos del formulario, como enviarlos a un servidor

    // Restablecer los campos del formulario
    setNombre('');
    setDescripcion('');
    setModelo('');
    setPrecio('');
    setImagen(null);
    setImagenURL('');
  };

  const handleImagenChange = (e) => {
    const selectedFile = e.target.files[0];
    setImagen(selectedFile);
    setImagenURL(URL.createObjectURL(selectedFile));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        {/* Campos del formulario */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="nombre">Nombre del producto:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', backgroundColor: '#f7f7f7' }}
          />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', backgroundColor: '#f7f7f7' }}
          ></textarea>

          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', backgroundColor: '#f7f7f7' }}
          />

          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px', backgroundColor: '#f7f7f7' }}
          />

          <label htmlFor="imagen">Imagen:</label>
          <input
            type="file"
            id="imagen"
            onChange={handleImagenChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Detalles del producto */}
      <div style={{ marginLeft: '20px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h2>Nombre del producto: {nombre}</h2>
        <h2>Descripción: {descripcion}</h2>
        <h2>Modelo: {modelo}</h2>
        <h2>Precio: {precio}</h2>
        {imagenURL && <img src={imagenURL} alt="Imagen del producto" style={{ maxWidth: '200px' }} />}
      </div>
    </div>
  );
};

export default EjemFormulario;


