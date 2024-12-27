import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Menu from './Componentes/Menu/Menu.jsx'
import CreateRecipe from './Componentes/CreateRecipe/CreateRecipe.jsx'
import RecipeHistory from './Componentes/RecipeHistory/RecipeHistory.jsx'
import { Populares } from './Componentes/Populares/Populares.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <CreateRecipe />
    <RecipeHistory />
    <Populares />

  </StrictMode>,
)
