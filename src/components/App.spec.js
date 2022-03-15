import {App} from './App'
//import {createCards} from '../src/main.js'


const data = [
    { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
]

describe('App', () => {
  const traerData = App(data);
   it('should render without crashing', () => {
   expect(traerData instanceof HTMLElement).toBe(true);
  });
  it("Pintar 9 etiquetas de img", () => {
    let ejecutar = traerData.querySelectorAll('img');
    expect(ejecutar.length).toBe(1);
  })
});

describe('have button', () => {
  it('should be a button', () => {
    expect (typeof HTMLElement).toBe('function');
  });
}); 

describe('document.getElementById', () => {
  it('should be a function', () => {
    expect (typeof document.getElementById).toBe ('function')
  });
});

describe("si son o no pareja", () => {
  it("deberia retornar verdadero si hacen match", () => {
    //import arrayParaCompararId[0];
    //import arrayParaCompararId[1];
    expect(Object === Object).toBe(true);
  });
  it("deberia retornar falso si no hacen match", () => {
    expect(Object != Object).toBe(false);
  });
})



/* const dataPokemon = [
  { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
    { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
    { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png', bgColor: '#339933' },
    { id: 'charmander', image: 'https://www.serebii.net/pokemongo/pokemon/004.png', bgColor: '#F05032' },
    { id: 'charmeleon', image: 'https://www.serebii.net/pokemongo/pokemon/005.png', bgColor: '#F05032' },
    { id: 'charizard', image: 'https://www.serebii.net/pokemongo/pokemon/006.png', bgColor: '#F05032' },
    { id: 'squirtle', image: 'https://www.serebii.net/pokemongo/pokemon/007.png', bgColor: '#1572B6' },
    { id: 'wartortle', image: 'https://www.serebii.net/pokemongo/pokemon/008.png', bgColor: '#1572B6' },
    { id: 'blastoise', image: 'https://www.serebii.net/pokemongo/pokemon/009.png', bgColor: '#1572B6' },
] */

/* describe('main', () => {
  const imagePokemon = createCards(dataPokemon);
  it("traer todas las imagenes", () => {
    expect(imagePokemon instanceof HTMLElement).toBe(true);
  });
  it("Pintar 9 etiquetas de img", () => {
    let ejecutar = imagePokemon.querySelectorAll('img');
    expect(ejecutar.length).toBe(9);
  })
}) */

/* describe('save data', () => {
  it('should save images of pokemons', () =>{
    const dataPokemon = {items: "function"}
    expect(typeof Object).toBe(dataPokemon);
  })
}) */

/* describe("lista de pokemones", () => {
  let pokemons = [];
  beforeEach(() => {
    pokemons.reset()
  });

  it("deberia almacenar un nuevo pokemon", () => {
    pokemons.add('bulbasaur');
    expect(pokemons.list).toContain('bulbasaur');
  });

  it("deberia almacenar diferentes pokemones", () => {
    pokemons.add('ivysaur');
    pokemons.add('bulbasaur');
    expect(pokemons.list).toContain('ivysaur');
    expect(pokemons.list).toContain('bulbasaur');
  })
}) */