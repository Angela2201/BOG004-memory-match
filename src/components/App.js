export const App = (itemCartas) => {
  const traerData = document.createElement('div')
  traerData.className = 'TableroApp';
  const contenido = `<img src="${itemCartas.image}" id="data" alt="Pokemon's">` 
  traerData.innerHTML = contenido
  return traerData 
}


  



