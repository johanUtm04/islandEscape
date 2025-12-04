import '../css/Community.css';
import liveStreamGif from '../assets/live_stream_action.gif';

function Community() {
  
  const leaderBoardData = [
    { rank: 1, name: 'Comando_JOJO', score: 15480, kills: 489 },
    { rank: 2, name: 'AztarothSlayer', score: 13990, kills: 395 },
    { rank: 3, name: 'JungleViper', score: 12550, kills: 350 },
    { rank: 4, name: 'NeonSamurai', score: 10875, kills: 301 },
    { rank: 5, name: 'AztaBossKiller', score: 9900, kills: 275 },
  ];

  return (
    <section className="community-section" id="seccion-comunidad">
      <h2 className="section-title">Comunidad: El Frente de Batalla</h2>

      <div className="community-grid">

        <div className="discord-widget-box">
          <h3 className="widget-title">Únete a la Base de Operaciones</h3>
          <p className="widget-subtitle">Conéctate con otros supervivientes y coordina tu próxima misión.</p>
          
          <div className="discord-iframe-placeholder">
            <p>Widget de Discord aquí (Chats, Miembros, etc.)</p>
          </div>
          
          <button className="discord-join-button">
            ACCESO INMEDIATO AL DISCORD
          </button>
        </div>

<div className="live-feed-box">
<h3 className="widget-title live-title" style={{ color: "#92e78aff" }}>
  🎮 Gameplay demostrativo de Island Escape
</h3>
          <p className="widget-subtitle">¡Mira a los mejores jugadores en acción ahora mismo!</p>

          <div className="live-stream-placeholder">
            <img src={liveStreamGif} alt="Acción en vivo de Island Escape" className="live-stream-gif" />
          </div>
          
          <div className="streamer-info">
            <span className="live-indicator">LIVE</span>
            <span className="streamer-name">Streamer: <a href="#streamer-link">GuerreroNeón</a></span>
          </div>
        </div>

      </div> 
{/* 
      <div className="leaderboard-container">
        <h3 className="leaderboard-title">⚔️ Top 5: Eliminación de Aztaroths</h3>
        
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>RANGO</th>
              <th>NOMBRE</th>
              <th>PUNTOS</th>
              <th>KILLS</th>
            </tr>
          </thead>
          <tbody>
            {leaderBoardData.map((player) => (
              <tr key={player.rank} className={player.rank === 1 ? 'top-player-row' : ''}>
                <td className="rank">{player.rank}</td>
                <td className="player-name">{player.name}</td>
                <td className="score">{player.score.toLocaleString()}</td>
                <td className="kills">{player.kills.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

    </section>
  );
}

export default Community;