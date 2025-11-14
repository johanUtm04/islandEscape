import news1 from '../assets/news_1.jpg';
import news2 from '../assets/news_2.jpg';
import news3 from '../assets/news_3.jpg';

function NewsItem({ imageSrc }) {
  return (
    <div className="news-item">
      <img src={imageSrc} alt="Noticia" className="news-image" />
      <div className="news-text-placeholder"></div>
      <div className="news-text-placeholder"></div>
      <div className="news-text-placeholder short"></div>
    </div>
  );
}

function News() {
  return (
    <section className="news-section">
      <h2 className="section-title">Noticias</h2>
      <div className="news-container">
        <NewsItem imageSrc={news1} />
        <NewsItem imageSrc={news2} />
        <NewsItem imageSrc={news3} />
      </div>
    </section>
  );
}

export default News;