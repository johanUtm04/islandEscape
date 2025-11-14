
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'; 
import '../css/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const reportData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "reportes"), reportData);
      
      alert('¡Reporte Recibido! Tu mensaje ha sido transmitido con éxito a la Base de Operaciones.');
      
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
    } catch (error) {
      console.error("❌ Error al transmitir el reporte: ", error);
      alert('ERROR CRÍTICO: No se pudo conectar con la base de datos. Revisa la consola.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="seccion-contacto">
      <h2 className="section-title">CONTACTO: REPORTE DE MISIÓN</h2>
      <div className="contact-container">
        
        <div className="contact-info-box">
          <h3 className="info-title">Base de Operaciones</h3>
          <p className="info-text">
            Si tienes reportes críticos, bugs, sugerencias urgentes o quieres unirte al equipo de desarrollo, usa esta línea de comunicación directa.
          </p>
          <ul className="contact-list">
            <li><strong>EMAIL:</strong> <a href="mailto:soporte@islandescape.com">soporte@islandescape.com</a></li>
            <li><strong>DISCORD:</strong> Únete al canal de Soporte Táctico</li>
            <li><strong>TELÉFONO:</strong> <span className="data-encrypted">[Cifrado - Solo personal autorizado]</span></li>
          </ul>
        </div>

        <div className="contact-form-box">
          <h3 className="narrative-title">ACCESO A TERMINAL DE REPORTE</h3>
          
          <form className="mission-report-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Nombre / ID de Operador</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email de Contacto</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
              />
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="subject">Asunto / Tipo de Reporte</label>
              <select 
                id="subject" 
                name="subject" 
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isSending}
              >
                <option value="" disabled>Selecciona el tipo de misión</option>
                <option value="Bug Critico">Reporte de Bug Crítico</option>
                <option value="Sugerencia">Sugerencia de Jugabilidad</option>
                <option value="Prensa">Prensa/Colaboración</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Mensaje / Detalles de la Misión</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSending}
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSending}>
              {isSending ? 'TRANSMITIENDO...' : 'TRANSMITIR REPORTE'}
              <span className="icon-arrow">»</span>
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;