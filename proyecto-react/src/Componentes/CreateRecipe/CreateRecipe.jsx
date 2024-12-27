import React, {useState, useEffect } from 'react'
// import Ingredientslist from './Ingredientslist'
// import RecipeBuilder from './RecipeBuilder'
// import RecipeSummary from './RecipeSummary'
import './createRecipe.css'


const CreateRecipe = () => {

  return (
    <><section className='seccion-create-recipe'>
    <div className='contenedor' >
      <div className='botones-estaticos'>
        <button className='boton-borrar'>Borrar</button>
        <button className='boton-guardar'>Guardar y Cerrar</button>
        <button className='boton-volver-Inicio'>Volver a Inicio</button>
      </div>
      <div className='container-titulo'>
       
      <input 
      type="text" className='titulo.recipe'
      placeholder="Titulo: Pizza Napolitana" />
      
      <input className='comentario'
      type="text" 
      placeholder='Comparte un poco mas acerca de este plato'/>
      </div>
    </div>
    <div className='ingredientes-contenedor'>
      <div className='ingredientes'>
      <p>Ingredientes</p>
      <input 
      type="text"
       placeholder='Ej: 250 gr harina'/>
      <button className='boton-mas'>+ Ingrediente</button>
      </div>

      <div className='pasos'> 
      <p >Pasos</p>

      <p> 1 
       <textarea name="" id="" placeholder='Ej: Batir los huevos hasta... '></textarea>
       </p>

      <p> 2 <textarea name="" id="" placeholder='Ej: calentar el horno a ...'></textarea></p>

      </div>
      
    </div>
    </section>
    </>
  )

}
export default CreateRecipe;