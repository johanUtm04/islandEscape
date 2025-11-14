import '../App.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-command-terminal">
      <div className="footer-content-wrapper">
        <p className="footer-status-text">
          ESTADO: **ISLA ASEGURADA** | PROTOCOLO NEÓN ACTIVO
        </p>
        <div className="footer-links">
          <a href="#top">Volver Arriba</a>
        </div>
        <p className="footer-copyright">
          &copy; {currentYear} Island Escape. Todos los derechos clasificados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;