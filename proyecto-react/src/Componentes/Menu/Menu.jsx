import React from 'react'
import './Menu.css'
import fondo2 from '../assets/fondo2.jpg'




const Menu = ({setView}) => {
  

  return (
    <>
    <section >
    <nav >
      <div   className='menu-nav '  >
        <a href="#"className='logo'>Tini Bites.</a>
  

       <ul className='lista-nav'>
       
        <li> <a href="#">Inicio</a></li>
        <li> <a href="#section-historial">Historial</a></li>
        <li> <a href="#populares">+ Populares</a></li>
      
        </ul>
        </div >
        </nav>
    
      <div className='fondo-imagen container-fluid' style={{ backgroundImage: `url(${fondo2})` }}>
      <div className="Titulo">
      
        <h1>Bienvenido a <span>Tiny Bites</span></h1> 
        <p className='parrafo-bienvenida'>Crea recetas unicas y personalizadas para tus gustos.</p>
      
        <button className="crear-receta"> <a href="#">Crear Receta</a></button>
        <button className='Ver-Recetas'> <a href="#">Ver Recetas</a></button>
        </div>
        </div>

    </section>
    
    
    </>
  )
}

export default Menu