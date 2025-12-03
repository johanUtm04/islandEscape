import { useState } from 'react';
import charImage1 from '../assets/personaje1.webp'; 
import charImage2 from '../assets/personaje2.webp'; 
import charImage3 from '../assets/personaje3.webp'; 
import '../css/Character.css'; 

const CHARACTERS_DATA = 
[
  { 
    id: 1, 
    name: 'Hunter', 
    imgSrc: charImage1, 
    description: 'Es un soldaod de operaciones especiales con un hitorial impecable en misiones imposibles.Entrenado desde joven en infliltración,supervivencia y combate en solitario.',
    details: [
      { label: 'Rango', value: 'Guerrero' }, 
      { label: 'Misiones', value: '10 victorias' }, 
      { label: 'Afiliación', value: 'Army' }
    ]
  },
  { 
    id: 2, 
    name: 'Cobra', 
    imgSrc: charImage2, 
    description: 'Forma parte del equipo Cobra la cual nació como una célula militar clandestina formada por antiguos mercenarios expulsados de diversas naciones; su objetivo principal es: crear un ejército independiente capaz de doblegar a las potencias mundiales.',
    details: [
      { label: 'Misión', value: 'Conquistar el mundo' }, 
      { label: 'Clase de enemigo', value: 'Malvado, agresivo' }, 
      { label: 'Afiliación', value: 'Cobra' }
    ]
  }
];

function CharacterCard({ character }) {
  return (
    <div className="character-card-content"> 
      <div className="character-image-box">
        <img src={character.imgSrc} alt={character.name} className="character-image" />
      </div>
      <div className="content">
        <h3>{character.name}</h3>
        <p className="description">{character.description}</p>
      </div>
      <footer className={`footer footer-card-${character.id}`}>
        {character.details.map((detail, index) => (
          <div key={index} className="details">
            <h6>{detail.label}</h6>
            <p>{detail.value}</p>
          </div>
        ))}
      </footer>
    </div>
  );
}

function Characters() {

  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = CHARACTERS_DATA.length;

  const plusSlides = (n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > totalSlides) {
        newIndex = 1;
      }
      if (newIndex < 1) {
        newIndex = totalSlides;
      }
      return newIndex;
    });
  };

  return (
  <section className="characters-section" id="seccion-personajes">
      <h2 className="section-title">Personajes</h2>
      
      <div className="characters-container-wrapper"> 
        
        <button className="slide prev" onClick={() => plusSlides(-1)}>&lt;</button>

        <div className="container border1 slideshow-container">
          
          {CHARACTERS_DATA.map((character, index) => {
            const currentSlide = index + 1;
            
            return (
              <section 
                key={character.id}
                className={`mySlides fade`} 
                style={{ 
                  display: currentSlide === slideIndex ? 'block' : 'none' 
                }}
              >
                <CharacterCard character={character} />
              </section>
            );
          })}
        </div>

        <button className="slide next" onClick={() => plusSlides(1)}>&gt;</button>
        
      </div>
    </section>
  );
}

export default Characters;