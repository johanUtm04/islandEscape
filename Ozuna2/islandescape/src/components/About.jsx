import '../css/About.css'; 

function About() {
  return (
    <section className="about-section" id="acerca-de">
      <h2 className="section-title">Acerca de NexusTech</h2>
      
      <div className="about-content">
        <p>
          En <strong>NexusTech</strong> somos un equipo apasionado por la tecnología, la creatividad 
          y el desarrollo de videojuegos de alta calidad. Nuestro propósito es construir experiencias 
          inmersivas que conecten con los jugadores y los transporten a mundos llenos de aventura.
        </p>

        <p>
          Cada uno de nuestros proyectos nace del trabajo conjunto entre desarrolladores, diseñadores 
          y artistas que comparten la visión de crear universos únicos. Valoramos la innovación, la 
          dedicación y la calidad en cada detalle.
        </p>

        <p>
          Gracias por acompañarnos en este camino. En NexusTech seguimos creciendo y creando nuevas 
          experiencias para ti. ¡Lo mejor aún está por venir!
        </p>
      </div>

      <h3 className="team-title">Conoce a nuestro equipo de trabajo</h3>

      <div className="team-container">
        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">1</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">2</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">3</h4>
          <p className="member-role">Concepto</p>
        </div>

        <div className="team-member">
          <div className="member-image-placeholder"></div>
          <h4 className="member-name">4</h4>
          <p className="member-role">Concepto</p>
        </div>
      </div>
    </section>
  );
}

export default About;
