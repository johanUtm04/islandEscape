import '../css/History.css';

function History() {
    const historyData = [
    { type: 'ID EXPEDIENTE', value: 'ISL-ESC-007A' },
    { type: 'CLASIFICACIÓN', value: 'ULTRA SECRETO / AZTAROTH' },
    { type: 'FECHA DE CREACIÓN', value: '25 JUN 1988' },
    { type: 'EVENTO PRINCIPAL', value: 'INTRUSIÓN NO IDENTIFICADA (INI-001)' },
  ];

  const storyParagraphs = [
    { key: 1, text: 'El año era 1988. La isla, un punto insignificante en el Pacífico Sur, era utilizada como un discreto puesto de avanzada militar, clave para la vigilancia regional. Todo cambió con un pulso electromagnético masivo que dejó la base en tinieblas.' },
    { key: 2, text: 'Minutos después del pulso, se registraron ecos no humanos. Criaturas conocidas ahora como Aztaroths emergieron de la densa jungla. Su objetivo no era la destrucción, sino la *obtención* de una tecnología olvidada, oculta bajo las ruinas de un templo precolombino.' },
    { key: 3, text: 'El Sargento Plua Rocca, el único superviviente del asalto inicial, se convirtió en el último recurso de la humanidad. Su misión no es evacuar, sino asegurar que el Expediente Cero—la clave para repeler la invasión—no caiga en manos de los Aztaroths. Ahora, la isla es un cementerio táctico donde la única ley es la supervivencia.' },
  ];

  return (
    <section className="history-section" id="seccion-historia">
      <h2 className="section-title">Expediente Clasificado: Orígenes</h2>

      <div className="dossier-container">
        
        <div className="terminal-log-box">
          <h3 className="log-title">ESTADO: COMPROMETIDO</h3>
          
          {historyData.map((item, index) => (
            <div key={index} className="log-entry">
              <span className="log-type">{item.type}:</span>
              <span className="log-value">{item.value}</span>
            </div>
          ))}

          <button className="download-dossier-button">
            DESCARGAR ARCHIVO COMPLETO
          </button>
        </div>

        <div className="narrative-box">
            <h3 className="narrative-title">REGISTRO DE INCIDENTE INI-001</h3>
            <div className="narrative-text">
                {storyParagraphs.map(p => (
                    <p key={p.key}>{p.text}</p>
                ))}
                <div className="signature-line">
                    <span className="signature-text">SGT. P. ROCCA / ÚLTIMO REPORTE</span>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}

export default History;