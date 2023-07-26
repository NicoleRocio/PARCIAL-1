import React from 'react'
import { useState } from 'react'
const EjemUseState02 = () => {
    const [nombre,setnombre]=useState("");
    const [apellido,setapellido]=useState("");

  return (
    <div>
        <form>
            <label htmlFor="">Nombre</label>
            <input type='text'
             value={nombre}
             onChange={(e)=>setnombre(e.target.value)}
             />
            <label htmlFor="">Apellido</label>
            <input type='text'
            value={apellido}
            onChange={(e)=>setapellido(e.target.value)}
/>
        </form>
        <h2>NOmbre:{nombre}</h2>
        <h2>apellido:{apellido}</h2>
    </div>
  )
}

export default EjemUseState02